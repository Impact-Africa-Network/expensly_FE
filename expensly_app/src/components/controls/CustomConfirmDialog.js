import React from 'react'
import { Dialog, DialogContent, DialogTitle, DialogActions, Typography, makeStyles, IconButton } from '@material-ui/core';
import Controls from './Controls';

const useStyles = makeStyles(theme => ({
    dialog: {
        // position: 'absolute',
        top: theme.spacing(5),
        padding: theme.spacing(2)
    },
    dialogTitle: {
        textAlign: 'center'
    },
    dialogContent: {
        textAlign: 'center'
    },
    dialogActions: {
        justifyContent: 'center',
        padding: theme.spacing(3)
    },
    titleIcon: {
        backgroundColor: theme.palette.secondary.light,
        color: theme.palette.main,
        '&:hover': {
            backgroundColor: theme.palette.secondary.light,
            cursor: 'default'
        },
        '& .MuiSvgIcon-root': {
            fontSize: '4rem',
        }
    },
    subtitle: {
        paddingTop: theme.spacing(2)
    },
    body: {
        paddingTop: theme.spacing(3)
    }
}))

export default function CustomConfirmDialog(props) {

    const {
        confirmDialog, 
        setConfirmDialog, 
        component, 
        backtext, 
        confirmtext,
        show,
        bodyComponent,
        btnColor
    } = props;
    const classes = useStyles();

    return (
        <Dialog open = {confirmDialog.isOpen} classes = {{ paper: classes.dialog }}>
            <DialogTitle className={classes.dialogTitle}>
                <IconButton
                    disableRipple
                    className={classes.titleIcon}
                >
                    {component}
                </IconButton>
            </DialogTitle>
            <DialogContent className={classes.dialogContent}>
                <Typography variant='h6'>
                    {confirmDialog.title}
                </Typography>
                <Typography variant='subtitle2' className={classes.subtitle}>
                    {confirmDialog.subTitle}
                </Typography>
                {/* <Typography variant='body' className={classes.body}>
                    {confirmDialog.body}
                </Typography> */}
                {bodyComponent}

            </DialogContent>
            <DialogActions className={classes.dialogActions}>
                {
                    show ? (
                    <>
                        <Controls.Button
                            text = {backtext}
                            color = 'default'
                            variant="outlined"
                            onClick = {() => {
                                setConfirmDialog({
                                    ...confirmDialog,
                                    isOpen: false
                                })
                            }}
                        />
                        <Controls.Button
                            text = {confirmtext}
                            color = {btnColor || 'secondary'}
                            onClick = {confirmDialog.onConfirm}
                        />
                        
                    </>
                    ) : (
    
                        <Controls.Button
                            text = {confirmtext}
                            color = {btnColor || 'secondary'}
                            onClick = {confirmDialog.onConfirm}
                        />
                    )
                }
                
            </DialogActions>
        </Dialog>
    )
}
