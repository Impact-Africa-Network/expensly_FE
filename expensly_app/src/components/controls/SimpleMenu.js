import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
  button: {
    textTransform: 'lowercase'
  },
  MenuText: {
    fontSize: '13px',
  }
}));

export default function SimpleMenu(props) {
  const {
    MenuText1, 
    MenuText2, 
    MenuText3, 
    MenuText4, 
    defaultText,
    handleClickText1,
    handleClickText2,
    handleClickText3,
    handleClickText4,
    handleClickMenu,
    anchorEl, 
    setAnchorEl,
    handleClose,
    variant
  } = props

  const classes = useStyles();

  // const [anchorEl, setAnchorEl] = React.useState(null);

  // const handleClickMenu = (event) => {
  //   setAnchorEl(event.currentTarget);
  // };

  // const handleClose = () => {
  //   setAnchorEl(null);
  // };

  return (
    <div>
      <Button 
        aria-controls="simple-menu" 
        aria-haspopup="true" 
        onClick={handleClickMenu} 
        className={classes.button} 
        endIcon={<ExpandMoreIcon />}
        variant={variant || "outlined"}
        size="small"
      >
        {defaultText || "Actions"}
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem className={classes.MenuText} onClick={handleClickText1}>{MenuText1}</MenuItem>
        <MenuItem className={classes.MenuText} onClick={handleClickText2}>{MenuText2}</MenuItem>
        <MenuItem className={classes.MenuText} onClick={handleClickText3}>{MenuText3}</MenuItem>
        <MenuItem className={classes.MenuText} onClick={handleClickText4}>{MenuText4}</MenuItem>
      </Menu>
    </div>
  );
}
