import axios from "axios";

const getIntrusions = (intrusions)=>({
    type:"GET_INTRUSIONS",
    intrusions
});

const startGetIntrusions = ()=>{
    return(dispatch)=>{
        return axios.get("/intrusions").then((data)=>{  
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

const startDeleteIntrusion = (_id)=>{
    return (dispatch)=>{
        return axios.delete("http://raspberrypi.local:3000/intrusions/delete/"+_id).then(()=>{
            dispatch(deleteIntrusion(_id));
        }).catch((e)=>{
            console.log(e);
        })
    }
}

const deleteAllIntrusions = ()=>({
    type:"DELETE_ALL_INTRUSIONS"
})

const startDeleteAllIntrusions = ()=>{
    return (dispatch)=>{
        return axios.delete("http://raspberrypi.local:3000/intrusions/delete/all").then(()=>{
            dispatch(deleteAllIntrusions());
        }).catch((e)=>{
            console.log(e);
        })
    }
}

export {startGetIntrusions,startDeleteIntrusion,startDeleteAllIntrusions};