import React, {useState, useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  makeStyles,
  Typography,
  Divider,
} from '@material-ui/core'
// import VerticalLinearStepper from '../controls/FormOptionalStepper'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
// import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'
// import SEAvatar from '../Avatar'
import axios from 'axios'
import Grid from '@mui/material/Grid'
import SideMenu from './SideMenu'

const useStyles = makeStyles((theme) => ({
  container: {
    // display: 'flex',
  },
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  appMain: {
    // paddingLeft: '300px',
    padding: theme.spacing(2),
    paddingRight: theme.spacing(3),
    width: '100%',
    margin: '0px'
  },
  PageTitle: {
    paddingTop: '70px',
    paddingBottom: '4vh',
    '& .MuiTypography-h5': {
      fontWeight: 600,
    },
  },
  PageDetails: {
    paddingTop: theme.spacing(2),
  },
  progress: {
    // paddingTop: '16vh',
    paddingBottom: '4vh',
    padding: theme.spacing(2),
  },
  setup: {
    color: 'rgb(75,0,130)',
    textAlign: 'center'
  },
  titleInfo: {

  },
  ListMenu: {
    textAlign: 'center',
    justifyContent: 'center',

    '& .MuiListItem-gutters': {
      paddingLeft: theme.spacing(3)
    }
  },
  ListText: {
    fontWeight: 'inherit',
    fontSize: '0.9em'

  },
  button: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1),
    padding: theme.spacing(3),
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    fontSize: '15px'
  },
  logo: {
    padding: '1.5rem 1rem 1rem',
    background: '#fff',
    color: '#153d77',
    textAlign: 'center',
    paddingTop: '80px',
  },
  MenuIcons: {
    fontSize: '1rem'
  }
  
}))

export default function DashboardLayout(props) {
  const API = process.env.REACT_APP_BASE_API_URL

  const classes = useStyles();
  const { pageComponent } = props;
  const access_token = localStorage.getItem('access')
  const [currentOrg, setCurrentOrg] = useState('')
  const [logo, setLogo] = useState('')

  const navigate = useNavigate()

  const itemsList = [
    {
      text: 'Dashboard',
    //   icon: <GridViewIcon className={classes.MenuIcons} />,
      
    },
    {
      text: 'Wallet',
    //   icon: <AccountBalanceWalletIcon className={classes.MenuIcons} />,
      
    },
   
  ]

  return (
    <>
      <Grid container spacing={2}>
        <Grid item md={3} sm={3} lg={3}>
            <SideMenu
                component={
                    <>
                    {/* <div className={classes.sidebarUser}>
                        {
                        logo ? (
                            <SEAvatar name={currentOrg} url={logo} size="80"/>
                        ):(
                            <SEAvatar name={currentOrg} size="80"/>
        
                        )
                        }
                        <div className="font-weight-bold pt-2">{currentOrg}</div>
                    </div> */}
        
                    <div>
                        <Divider />
        
                        <List className={classes.ListMenu}>
{/* ÷                        <ListItem button onClick={to_home} className={classes.ListItem}> */}
÷                        <ListItem button className={classes.ListItem}>

                            <ListItemIcon>
                            {/* <HomeIcon className={classes.MenuIcons} /> */}
                            </ListItemIcon>
                            <ListItemText className={classes.ListText} secondary="Home" />
                        </ListItem>
                        {itemsList.map((item, index) => {
                            const { text, icon, onClick, selected } = item;
                            return (
                            <>
                                <ListItem
                                button
                                key={text}
                                onClick={onClick}
                                selected={selected}
                                className={classes.ListItem}
                                >
                                {icon && <ListItemIcon>{icon}</ListItemIcon>}
                                <ListItemText
                                    className={classes.ListText}
                                    secondary={text}
                                />
                                </ListItem>
                                {/* <Divider variant='middle'/> */}
                            </>
                            );
                        })}
                        </List>
                    </div>
                    </>
                }
                itemsList={itemsList}
            />
        </Grid>

        <Grid item md={9} sm={9} lg={9}>
            <div className={classes.appMain}>{pageComponent}</div>
          
        </Grid>


      </Grid>
    </>
  );
}
