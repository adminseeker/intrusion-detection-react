import React, { useState } from "react";
import {connect} from "react-redux";
import { setStartDate, setEndDate } from "../actions/filters";
import { DateRangePicker } from "react-dates";


const IntrusionListFilters = (props)=>{
    const [calendarFocused,setCalendarFocused] = useState(null);
    return(
        <div>
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
        </div>
    )
};

const mapStateToProps = (state)=>{
    return {
    filters:state.filters
    }
}

export default connect(mapStateToProps)(IntrusionListFilters);