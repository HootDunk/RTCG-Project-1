import { 
    makeStyles, 
    TextField, 
    Button, 
    Input, 
    Dialog, 
    DialogContent, 
    DialogContentText, 
    DialogActions, 

} from '@material-ui/core';

import React, { useState } from 'react'
import CardWrapper from "./CardWapper"


// const useStyles = makeStyles({
//     field: {
//       marginTop: 20,
//       marginBottom: 20,
//       display: 'block',
//     }

//   });

  const useStyles = makeStyles((theme) => ({
    root: {
      padding: theme.spacing(2)
    },
    field: {
        marginTop: 20,
        marginBottom: 20,
        display: 'block',
      }
  }));

export default function NewUserForm({sendData}) {
    const [nameError, setNameError] = useState(false);
    const [name, setName] = useState("");
    const [ageError, setAgeError] = useState(false);
    const [age, setAge] = useState("");
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // update state in app js.
        if (name && age){
            sendData({name, age})
            setName("");
            setAge("");
        }

        name? setNameError(false) : setNameError(true);
        age? setAgeError(false) : setAgeError(true);
        !name || !age? setModalIsOpen(true) : setModalIsOpen(false);
    }

    const classes = useStyles();
    return (
        <div>
        <CardWrapper>
            <form noValidate autoComplete="off" onSubmit={handleSubmit}>
                <TextField 
                    onChange={(e) => setName(e.target.value)}
                    className={classes.field}
                    label="Name"
                    value={name}
                    variant="outlined"
                    color="primary"
                    fullWidth
                    required // doesn't add validation, simply adds astric for ui
                    error={nameError}
                />
                <Input
                    type="number" 
                    onChange={(e) => setAge(e.target.value)}
                    className={classes.field}
                    label="Age (Years)"
                    value={age}
                    variant="outlined"
                    color="primary"
                    fullWidth
                    required // doesn't add validation, simply adds astric for ui
                    error={ageError}
                />
                <Button 
                    variant="contained" 
                    color="primary"
                    type="submit"
                >
                    Add User
                </Button>
            </form>
        </CardWrapper>
        <Dialog
            open={modalIsOpen}
            onClose={() => setModalIsOpen(false)}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            fullWidth
            maxWidth="xs"
        >
            <DialogContent>
                {nameError &&
                    <DialogContentText id="alert-dialog-description">
                       Name must be filled out
                    </DialogContentText>
                }
                {ageError &&
                    <DialogContentText id="alert-dialog-description">
                       Age must be filled out
                    </DialogContentText>
                }
            </DialogContent>
            <DialogActions>
                <Button
                    onClick={() => setModalIsOpen(false)} 
                    color="primary" 
                    autoFocus
                >
                    Close
                </Button>
            </DialogActions>
        </Dialog>
        </div>


        

    )
}
