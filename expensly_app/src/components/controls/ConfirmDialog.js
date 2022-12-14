import React from 'react'
import { Dialog, DialogContent, DialogTitle, DialogActions, Typography, makeStyles, IconButton } from '@material-ui/core';
import Controls from './Controls';
import { NotListedLocation  } from '@material-ui/icons';

const useStyles = makeStyles(theme => ({
    dialog: {
        position: 'absolute',
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
        justifyContent: 'center'
    },
    titleIcon: {
        backgroundColor: theme.palette.secondary.light,
        color: theme.palette.main,
        '&:hover': {
            backgroundColor: theme.palette.secondary.light,
            cursor: 'default'
        },
        '& .MuiSvgIcon-root': {
            fontSize: '8rem',
        }
    }
}))

export default function ConfirmDialog(props) {

    const {confirmDialog, setConfirmDialog} = props;
    const classes = useStyles();

    return (
        <Dialog open = {confirmDialog.isOpen} classes = {{ paper: classes.dialog }}>
            <DialogTitle className={classes.dialogTitle}>
                <IconButton
                    disableRipple
                    className={classes.titleIcon}
                >
                    <NotListedLocation />
                </IconButton>
            </DialogTitle>
            <DialogContent className={classes.dialogContent}>
                <Typography variant='h6'>
                    {confirmDialog.title}
                </Typography>
                <Typography variant='subtitle2'>
                    {confirmDialog.subTitle}
                </Typography>

            </DialogContent>
            <DialogActions className={classes.dialogActions}>
                <Controls.Button
                    text = 'No'
                    color = 'default'
                    onClick = {() => {
                        setConfirmDialog({
                            ...confirmDialog,
                            isOpen: false
                        })
                    }}
                />
                <Controls.Button
                    text = 'Yes'
                    color = 'secondary'
                    onClick = {confirmDialog.onConfirm}
                />

            </DialogActions>
        </Dialog>
    )
}
