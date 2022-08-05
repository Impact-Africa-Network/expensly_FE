import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
    },
    button: {
      marginTop: theme.spacing(1),
      marginRight: theme.spacing(1),
    },
    actionsContainer: {
      marginBottom: theme.spacing(2),
    },
    resetContainer: {
      padding: theme.spacing(3),
    },
}));

export default function FormOptionalStepper(props) {

    const {
        getSteps,
        getStepContent,
        isStepOptional,
        activeStep,
        orientation,
        steps,

    } = props;

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Stepper activeStep={activeStep} orientation={orientation}>
                {steps.map((label, index) => {
                    const stepProps = {};
                    const labelProps = {};
                  
                    return (
                        <Step key={label} {...stepProps}>
                            <StepLabel {...labelProps}>{label}</StepLabel>
                        </Step>
                    );
                })}
            </Stepper>
        </div>
    );
}
