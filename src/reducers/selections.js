const defaultStateSelections = {
    id:"",
    camera: "",
    buzzer: "",
    notifications: ""
}

const selectionsReducer = (state=defaultStateSelections,action)=>{
    switch(action.type){
        case "GET_SELECTIONS":
            return action.selections;      
        default:
            return state;
    }
}

export default selectionsReducer;