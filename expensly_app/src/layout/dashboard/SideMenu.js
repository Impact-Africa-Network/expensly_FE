import React from 'react';
import {
  Drawer as MUIDrawer,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiDrawer-paperAnchorLeft': {
      // top: 'auto',
      width: '15%',
      backgroundColor: '#fff',

      '& .MuiTypography-body1': {
        opacity: '0.85',
        color: '#000',
        fontSize: '16px',
      },
    },

    '& .MuiListItemIcon-root': {
      color: '#000',
      minWidth: '40px',
    },
  },
}));

export default function SideMenu(props) {

  const { component } = props;

  const classes = useStyles();

  return (
    <>
      <MUIDrawer variant="permanent" className={classes.root}>
        {component}

      </MUIDrawer>
    </>
  );
}
