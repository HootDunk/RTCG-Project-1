import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    // margin: theme.spacing(2),
  },
}));

export default function User({name, age}) {
    const classes = useStyles();
    return (
        <Grid item xs={12}>
            <Paper elevation={0} variant="outlined" className={classes.paper}>{name} ({age} years old)</Paper>
        </Grid>
    )
}
