import moment from "moment";

const getVisibleIntrusions = (intrusions,{startDate,endDate})=>(
    intrusions.filter((intrusion)=>{
        const createdAtMoment = moment(intrusion.atTime);
        const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, "day") : true;
        const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment, "day") : true;
        return startDateMatch && endDateMatch;
    }).sort((a,b)=>{
        return a.atTime < b.atTime ? 1 : -1;
    })
)

export default getVisibleIntrusions;