import React from 'react';
import {Typography, Button} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Controls from '../controls/Controls';

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
    },
    button: {
      marginTop: theme.spacing(1),
      marginRight: theme.spacing(1),
      padding: theme.spacing(3),
      paddingTop: theme.spacing(1),
      paddingBottom: theme.spacing(1),
      fontSize: '15px'
    },
    actionsContainer: {
      marginBottom: theme.spacing(2),
    },
    resetContainer: {
      padding: theme.spacing(3),
    },
}));

export default function RestOfStepper(props) {

    const {
        activeStep,
        handleSubmit,
        handleBack,
        handleNext,
        getSteps,
        // steps
        variant,
        text
    } = props;

    const classes = useStyles();
    const steps = {getSteps};

    return (
            
        <div>
            <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                className={classes.button}
            >
                Back
            </Button>

            <Button
                variant={variant}
                color="primary"
                onClick={handleNext}
                className={classes.button}
                size="small"
                type="submit"
            >
                {text}
                {/* {activeStep === steps.length - 1 ? 'Finish' : 'Save and proceed'} */}
            </Button>
        </div>

    )
}
