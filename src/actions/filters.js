const setTextFilter = (text="")=>({
    type:"SET_TEXT_FILTER",
    text
})

const setPassword = (password="")=>({
  type:"SET_PASSWORD",
  password
})

const setStartDate = (startDate)=>({
    type:"SET_START_DATE",
    startDate
  })
  
  const setEndDate = (endDate)=>({
    type:"SET_END_DATE",
    endDate
  })

export {setTextFilter,setStartDate,setEndDate,setPassword};