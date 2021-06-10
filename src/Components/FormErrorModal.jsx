import React from 'react'
import { 
    Button, 
    Dialog, 
    DialogContent, 
    DialogContentText, 
    DialogActions, 

} from '@material-ui/core';


export default function FormErrorModal({nameError, ageError, closeModal, modalIsOpen}) {
    return (
        <Dialog
            open={modalIsOpen}
            onClose={closeModal}
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
                    onClick={closeModal} 
                    color="primary" 
                    autoFocus
                >
                    Close
                </Button>
            </DialogActions>
        </Dialog>
    )
}
