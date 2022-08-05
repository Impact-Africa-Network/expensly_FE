import React from 'react'
import { FormControl, FormControlLabel, Checkbox as MuiCheckbox } from '@material-ui/core';

export default function Checkbox(props) {

    const { value, name, label, onChange, ...other } = props;

    const convertToDefaultParam = (name, value) => ({
        target: {
            name, value
        }
    })

    return (
        <FormControl row>
            <FormControlLabel 
                control={
                <MuiCheckbox 
                    name={name}
                    checked={value}
                    color="primary"
                    onChange={e => onChange(e)}
                    // onChange={e => onChange(convertToDefaultParam(value, e.target.checked))}
                    // onChange = {e =>  console.log(value)}
                />}
                label={label}
                { ...other }
            />
        </FormControl>
            
    )
}
