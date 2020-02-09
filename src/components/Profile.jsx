import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  paper: {
    padding: 5,
    textAlign: 'center',
    marginTop: 20
  }
});

export default function Profile() {
  const classes = useStyles();

  return <Paper className={classes.paper}>profile</Paper>;
}
