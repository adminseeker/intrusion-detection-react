import axios from "axios";
import {setPassword} from "./filters";

const getIntrusions = (intrusions)=>({
    type:"GET_INTRUSIONS",
    intrusions
});

const startGetIntrusions = (password)=>{
    return(dispatch)=>{
        return axios.post(process.env.REACT_APP_RPI_URL+"/intrusions",{"password":password}).then((data)=>{  
            dispatch(getIntrusions(data.data))
        }).catch((e)=>{
            console.log(e);
        })
    }
}

const deleteIntrusion = (_id)=>({
    type:"DELETE_INTRUSION",
    _id
})

const startDeleteIntrusion = (_id,password)=>{
    return (dispatch)=>{
        return axios.delete(process.env.REACT_APP_RPI_URL+"/intrusions/delete/"+_id,
        {
            data:{"password":password}
        }
    )
        .then(()=>{
            dispatch(deleteIntrusion(_id));
        }).catch((e)=>{
            console.log(e);
        })
    }
}

const deleteAllIntrusions = ()=>({
    type:"DELETE_ALL_INTRUSIONS"
})

const startDeleteAllIntrusions = (password)=>{
    return (dispatch)=>{
        return axios.delete(process.env.REACT_APP_RPI_URL+"/intrusions/delete/all",
        {
            data:{"password":password}
        }
        ).then(()=>{
            dispatch(deleteAllIntrusions());
        }).catch((e)=>{
            console.log(e);
        })
    }
}

const verifyPassword = (password="")=>{
    return (dispatch)=>{
        return axios.post(process.env.REACT_APP_RPI_URL+"/verify",{"password":password})
        .then(async ()=>{
            console.log("authorized");
            await dispatch(setPassword(password))
        })
        

    }
}

export {startGetIntrusions,startDeleteIntrusion,startDeleteAllIntrusions,verifyPassword};