import axios from "axios";

const getSelections = (selections)=>({
    type:"GET_SELECTIONS",
    selections
})

const startGetSelections = (password)=>{
    return(dispatch)=>{
        return axios.post(process.env.REACT_APP_RPI_URL+"/intrusions/selections",{"password":password}).then((data)=>{  
            dispatch(getSelections(data.data))
        }).catch((e)=>{
            console.log(e);
        })
    }
}

const startSetSelections = (password,updates)=>{
    return(dispatch)=>{
        return axios.post(process.env.REACT_APP_RPI_URL+"/intrusions/set_selections",{"password":password,"camera":updates.camera,"buzzer":updates.buzzer,"notifications":updates.notifications}).then((data)=>{  
            dispatch(getSelections(data.data))
        }).catch((e)=>{
            console.log(e);
        })
    }
}

export {startGetSelections,startSetSelections};