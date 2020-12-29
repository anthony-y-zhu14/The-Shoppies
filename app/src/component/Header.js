import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from './Tabs';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,    
    background: 'primary',
    boxShadow: '0 4px 32px 0 rgba( 50, 50, 50)',
    borderRadius: '5px',
    border: '0.5px solid rgba( 0, 0, 0)',    
  }
}));

export default function ClippedDrawer(action) {
  const classes = useStyles();  

  return (
    <div className={classes.root}>   
      
      <AppBar variant='elevation' position="fixed" className={classes.appBar}>
        <Tabs />
      </AppBar>       

    </div>
  );
}