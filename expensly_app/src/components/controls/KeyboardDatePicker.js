import React from "react";
import { KeyboardDatePicker as MuiDatePicker } from "@material-ui/pickers" 
import { MuiPickersUtilsProvider } from '@material-ui/pickers'
import MomentUtils from '@date-io/moment'

function KeyboardDatePicker(props) {

    const {value, onChange} = props

    return (
        <>
            <MuiPickersUtilsProvider utils={MomentUtils}>
                <MuiDatePicker
                    clearable
                    value={value}
                    placeholder="1995-10-03"
                    onChange={onChange}
                    // minDate={new Date()}
                    format="yyyy-MM-D"
                    autoOk
                    // emptyLabel="Select Date of Birth"
                    disableFuture
                    openTo="year"
                    // defaultValue={new Date()}
                    // label="Select Date of Birth"
                />
            </MuiPickersUtilsProvider>
        </>
    );
    }

export default KeyboardDatePicker