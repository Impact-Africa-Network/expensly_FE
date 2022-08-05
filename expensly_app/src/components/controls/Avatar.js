import React from 'react'
import { makeStyles, Avatar } from '@material-ui/core'
import AvatarGroup from '@material-ui/lab/AvatarGroup'
import UserPlaceholder from '../../img/user.svg'

const useStyles = makeStyles(theme => ({
    avatar: {
        fontSize: '1rem',
        width: '30px',
        height: '30px',
        '& .MuiAvatar-root': {
            fontSize: '1rem',
            height: '30px',
            width: '30px'

        }
    },

    
}));


export default function GroupAvatars() {

    const classes = useStyles()

    return (
      <AvatarGroup className={classes.avatar} max={2}>
        <Avatar className={classes.avatar} alt="" src={UserPlaceholder} />
        <Avatar className={classes.avatar} alt="" src={UserPlaceholder} />
        <Avatar className={classes.avatar} alt="" src={UserPlaceholder} />
        <Avatar className={classes.avatar} alt="" src={UserPlaceholder} />
        <Avatar className={classes.avatar} alt="" src={UserPlaceholder} />
      </AvatarGroup>
    );
  }
