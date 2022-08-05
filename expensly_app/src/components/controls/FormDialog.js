import * as React from 'react'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import Controls from './Controls'
import Slide from '@mui/material/Slide'
import Box from '@material-ui/core/Box'

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function FormDialog(props) {

  const {
        title, 
        content, 
        handleClickOpen, 
        handleClose,
        open, 
        setOpen, 
        onConfirmText,
        handleConfirm,
        InputComponent,
        loading,
        show,
        alignText,
        size,
        endIcon
    } = props

  return (
    <div>
        <Dialog
            open={open} 
            onClose={handleClose} 
            TransitionComponent={Transition}
            fullWidth={true}
        >
        <DialogTitle>{title}</DialogTitle>
        <DialogContent>

            <DialogContentText>
              <Box display="flex" justifyContent={alignText || 'left'}>
                {content}
              </Box>
            </DialogContentText>
          
            {InputComponent}
        </DialogContent>
        <DialogActions>
        {
          show &&
          <>
            <Controls.Button 
                onClick = {handleClose}
                text="Cancel"
                size={size || 'small'}
                variant="outlined"
            />
            <Controls.Button 
                text={onConfirmText}
                onClick={handleConfirm}
                size={size || 'small'}
                variant="contained"
                loading={loading}
                endIcon={endIcon}
            />
          </>
        }
        </DialogActions>
      </Dialog>
    </div>
  );
}
