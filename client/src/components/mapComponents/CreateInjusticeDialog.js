import React, { useState } from "react";
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
  const { open, handleClose, location } = props;
  const classes = useStyles();
  console.log(props.location);
  const [document, setDocument] = useState({
    userID: "",
    location: location,
    body: "",
    createdAt: new Date(),
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDocument((prev) => ({
      ...prev,
      [name]: value,
    }));
    console.log(document);
  };
  const handleSubmit = () => {
    console.log("submit");
    handleClose();
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Tell Your Story</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Your identity will be kept anonymous
        </DialogContentText>
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
        <Button onClick={handleClose} variant="contained" color="secondary">
          Cancel
        </Button>
        <Button onClick={handleSubmit} variant="contained" color="primary">
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default CreateInjusticeDialog;
