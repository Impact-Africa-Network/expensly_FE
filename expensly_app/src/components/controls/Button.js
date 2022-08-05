import React from 'react'
import { Button as MuiButton, makeStyles } from '@material-ui/core'
// import CircularProgress from '@material-ui/core/CircularProgress'
import CircularProgress from '@mui/material/CircularProgress';

const useStyles = makeStyles( theme => ({
    root: {
        margin: theme.spacing(0.5)
    },
    label: {
        textTransform: "none"
    },
    spinner: {
        paddingLeft: theme.spacing(3),
        color: '#fff'
    }
}))

export default function Button(props) {

    const { text, size, color, variant, onClick, loading, ...other } = props
    const classes = useStyles();

    const SpinnerAdornment = () => (
        <CircularProgress
            size={20}
            sx={{
                color: "#fff",
                ml:'10px'
              }}
        />
    )

    return (
        <MuiButton
            variant={variant || "contained"}
            size={size || "large"}
            color={color || "primary"}
            onClick={onClick}
            { ...other } // This will help you extend other props that are not defined in the button
            classes = {{ root: classes.root, label: classes.label }}
        >
            {text}
            {loading && <SpinnerAdornment className={classes.spinner} {...other} />}
        </MuiButton>
    )
}
