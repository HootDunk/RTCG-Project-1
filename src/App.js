import { Container, CssBaseline, Grid, makeStyles, MuiThemeProvider } from '@material-ui/core';
import './App.css';
import User from "./Components/User"
import NewUserForm from "./Components/NewUserForm"
import { createMuiTheme } from "@material-ui/core/styles";
import CardWrapper from "./Components/CardWapper"
import { useState } from 'react';
const theme = createMuiTheme({
  palette: {
    background: {
      default: "#303030"
    }
  }
});

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(0),
    marginTop: theme.spacing(3),
  }
}));

function App() {
  const [users, setUsers] = useState([]);
  const classes = useStyles();

  const updateUsers = (newUser) => {
    // update the state
    setUsers(prevUsers => {
      return [
        ...prevUsers,
        newUser
      ]
    })
    
  }
  return (
    <div className="App">
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Container maxWidth="sm" className={classes.root} style={{outline: "1px solid black"}}>
          <NewUserForm sendData={updateUsers} />
        </Container>
        {users.length > 0 && 
          <Container maxWidth="sm" className={classes.root} style={{outline: "1px solid black"}}>
            <CardWrapper>
              <Grid container spacing={1}>
                {users
                    .map(({name, age}) => <User name={name} age={age} />)
                }
              </Grid>
            </CardWrapper>
        </Container>
        }

      </MuiThemeProvider>
    </div>
  );
}

export default App;


// Create a User Component
  // Should have a border and display user name and age

// Create a re-usable card component (for both our form and the user items)

// Button component