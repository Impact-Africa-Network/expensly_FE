import * as React from 'react';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Chip from '@mui/material/Chip';
import TextField from '@mui/material/TextField';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 300,
    },
  },
}

export default function MultipleSelectChip(props) {
    const {options, label, variant, personName, handleChange, ...other} = props
    
    return (
        <div>
        <FormControl
            sx={{ width: 360 }}
        >
            <InputLabel id="demo-multiple-chip-label" >
                {label}
            </InputLabel>
            <Select
                labelId="demo-multiple-chip-label"
                id="demo-multiple-chip"
                multiple
                value={personName}
                onChange={handleChange}
                input={<OutlinedInput id="select-multiple-chip" label={label} variant={variant || "standard"}/>}
                renderValue={(selected) => (
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                    {selected.map((value) => (
                        <Chip key={value} label={value} />
                    ))}
                    </Box>
                )}
                MenuProps={MenuProps}
                { ...other }
            >
                {options.map((item, idx) => (
                    <MenuItem
                        key={item.value[idx]}
                        value={item.value}
                    >
                        {item.name}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
        </div>
    )
}
