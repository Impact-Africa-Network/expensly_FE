import React from 'react';
import { TextField } from '@material-ui/core';

 // we have to pass parameters from the form hence make sure to add props
export default function Input(props) { 

    const {name, label, variant, value, onChange, multiline, error=null, ...other} = props

    return (
        <TextField
            variant={variant || 'outlined'}
            label={label}
            value = {value}
            size = 'small'
            name= {name}
            onChange={onChange}
            fullWidth
            multiline={multiline || false}
            margin="dense"
            { ...other }
            { ...(error && {error:true, helperText:error}) } // we check that the error is not null and assign the error and helper
        />
    )
}

