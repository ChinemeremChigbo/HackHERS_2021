import React, { useState, useEffect } from "react";
import firebase from "../../config";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Button,
  TextField,
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  TextField: {
    width: "100%",
  },
}));

const CreateInjusticeDialog = (props) => {
  const { open, handleClose } = props;
  const classes = useStyles();
  const database = firebase.database().ref("/stories/");
  const [document, setDocument] = useState({
    userID: "",
    position: props.position,
    body: "",
    createdAt: new Date(),
  });
  useEffect(() => {
    setDocument((prev) => ({ ...prev, position: props.position }));
  }, [props.position]);
  const addUserStory = () => {
    const postKey = database.push().key;
    let updates = {};
    updates[postKey] = document;
    database.update(updates);
  };
  const handleExit = () => {
    //not sure if should include
    props.removeClickMarker();
    setDocument((prev) => ({
      ...prev,
      body: "",
    }));
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setDocument((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSubmit = () => {
    addUserStory();
    handleClose();
  };
  useEffect(() => {});
  return (
    <Dialog
      fullWidth
      maxWidth="md"
      open={open}
      onClose={handleClose}
      onExit={handleExit}
    >
      <DialogTitle>Tell Your Story</DialogTitle>
      <DialogContent>
        <DialogContentText>Your identity is kept anonymous</DialogContentText>
        <TextField
          className={classes.TextField}
          multiline
          value={document.body}
          onChange={handleChange}
          variant="outlined"
          name="body"
          rows={10}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="secondary">
          Cancel
        </Button>
        <Button onClick={handleSubmit} color="primary">
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default CreateInjusticeDialog;
