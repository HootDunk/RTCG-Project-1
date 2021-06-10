import { makeStyles, Card, Container } from '@material-ui/core';
import React from 'react'

const useStyles = makeStyles((theme) => ({
    root: {
      padding: theme.spacing(2)
    },
  }));


// removes redundant formatting for card component
export default function CardWapper({children}) {
    const classes = useStyles();
    return (
        <Card>
            <Container className={classes.root}>
                {children}
            </Container>
        </Card>
    )
}
