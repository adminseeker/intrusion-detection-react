const defaultIntrusionsState =[];

const intrusionsReducer = (state=defaultIntrusionsState,action)=>{
    switch(action.type){
        case "GET_INTRUSIONS":
            return action.intrusions;
        case "DELETE_INTRUSION":
            return state.filter((intrusion)=>((action._id)!==(intrusion._id)));
        case "DELETE_ALL_INTRUSIONS":
            return [];
        default:
            return state;
    }
}

export default intrusionsReducer;