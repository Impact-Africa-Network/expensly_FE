import React from 'react'
import Chip from '@material-ui/core/Chip'

export default function StatusChip(props) {

    const {label, color, variant, ...other} = props

    return (
        <Chip 
            label={label}
            color={color || "default"}
            variant={variant}
        />
            
       
    )
}
