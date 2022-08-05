import React from 'react'
import { FormControl, InputLabel, Select as MuiSelect, MenuItem, FormHelperText } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';

export default function Select(props) {
 
    const { optionalMenu, optionalMenuValue, name, label, value, error=null, onChange, options, variant, textHelper,  ...other } = props;

    return (
        <FormControl
            // variant="standard"
            variant={variant || "outlined"}
            // { ...(error && {error:true}) } 
        >
            <InputLabel>{label}</InputLabel>
            <MuiSelect
                label={label}
                name={name}
                value={value}
                onChange={onChange}
                { ...other }
            >
                <MenuItem value={optionalMenuValue || ''}>{optionalMenu || "-- select --"}</MenuItem>
                {
                     options.map((item, idx) => (
                        <MenuItem key={item.value[idx]} value={item.value}>{item.name}</MenuItem>
                     ))
                }

            </MuiSelect>
            {/* {error && <FormHelperText>{error}</FormHelperText>} */}
            <FormHelperText>{textHelper || ''}</FormHelperText>
        </FormControl>
        
    )
}
