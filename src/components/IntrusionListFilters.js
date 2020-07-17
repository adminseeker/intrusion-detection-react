import React, { useState } from "react";
import {connect} from "react-redux";
import { setStartDate, setEndDate } from "../actions/filters";
import { DateRangePicker } from "react-dates";
import LoadIntrusions from "./LoadIntrusions";

const IntrusionListFilters = (props)=>{
    const [calendarFocused,setCalendarFocused] = useState(null);
    return(
        <div className="content-container">
        <div className="input-group">
        <div className="input-group__item">
        <DateRangePicker
        startDate={props.filters.startDate}
        endDate={props.filters.endDate}
        onDatesChange={({startDate,endDate})=>{
            props.dispatch(setStartDate(startDate));
            props.dispatch(setEndDate(endDate));
        }}
        focusedInput={calendarFocused}
        onFocusChange={(calendarFocused)=>{
            setCalendarFocused(calendarFocused)
        }}
        showClearDates={true}
        numberOfMonths={1}
        isOutsideRange={() => false}
      />
      <LoadIntrusions {...props}/>
      </div>
      
        </div>
        </div>
       
    )
};

const mapStateToProps = (state)=>{
    return {
    filters:state.filters
    }
}

export default connect(mapStateToProps)(IntrusionListFilters);