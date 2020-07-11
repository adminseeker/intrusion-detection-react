const setTextFilter = (text="")=>({
    type:"SET_TEXT_FILTER",
    text
})

const setStartDate = (startDate)=>({
    type:"SET_START_DATE",
    startDate
  })
  
  const setEndDate = (endDate)=>({
    type:"SET_END_DATE",
    endDate
  })

export {setTextFilter,setStartDate,setEndDate};