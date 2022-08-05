import React, { useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  makeStyles,
  Typography,
  Button,
} from '@material-ui/core';
import Controls from '../controls/Controls';
import CloseIcon from '@material-ui/icons/Close';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => ({
  dialogWrapper: {
    padding: theme.spacing(3),
    position: 'absolute',
    // top: theme.spacing(2),
  },
  dialogTitle: {
    paddingRight: '0px',
    paddingTop: '0px',
  },
}));

export default function Popup(props) {
  const classes = useStyles();
  const {
    title,
    children,
    openPopup,
    setOpenPopup,
    clickButtonText,
    handleSubmitNew,
    maxWidth,
    loading,
    hide
  } = props;

  return (
    <Dialog
      open={openPopup}
      classes={{ paper: classes.dialogWrapper }}
      maxWidth={maxWidth || 'sm'}
      fullWidth={true}
    >
      <DialogTitle className={classes.dialogTitle}>
        <div style={{ display: 'flex' }}>
          <Typography variant="h6" component="div" style={{ flexGrow: 1 }}>
            {title}
          </Typography>
          <Controls.ActionButton
            color="secondary"
            onClick={() => {
              setOpenPopup(false);
            }}
          >
            <CloseIcon />
          </Controls.ActionButton>
        </div>
      </DialogTitle>
      <DialogContent dividers>{children}</DialogContent>
      <DialogActions>
        {
          !hide && 
          <Box display="flex" justifyContent="center" p={1}>
            <Button
              onClick={() => {
                setOpenPopup(false);
              }}
            >
              Cancel
            </Button>
            <Controls.Button 
                color="primary" 
                variant="contained" 
                onClick={handleSubmitNew}
                text={clickButtonText}
                loading={loading}
            />
          </Box>
        }
        
      </DialogActions>
    </Dialog>
  );
}
