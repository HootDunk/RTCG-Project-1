import { 
    makeStyles, 
    TextField, 
    Button, 
    Input, 

} from '@material-ui/core';

import React, { useState } from 'react'
import ReactDom from 'react-dom'
import CardWrapper from "./CardWapper"
import FormErrorModal from "./FormErrorModal"


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
        <React.Fragment>
            {ReactDom
                .createPortal(
                    <FormErrorModal
                        closeModal={() => setModalIsOpen(false)}
                        nameError={nameError}
                        ageError={ageError}
                        modalIsOpen={modalIsOpen}
                    />,
                    document.getElementById("dialog-root")
                )
            }
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
        </React.Fragment>


        

    )
}
