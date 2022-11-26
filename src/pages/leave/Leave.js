import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { render } from "react-dom";
import { DatePicker } from "jalali-react-datepicker";
const Leave = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <Box sx={{ "& button": { m: 1 } }}>
        <Button variant="outlined" onClick={handleClickOpen}>
          Open form dialog
        </Button>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Subscribe</DialogTitle>
          <DialogContent>
            <DialogContentText>
              To subscribe to this website, please enter your email address
              here. We will send updates occasionally.
            </DialogContentText>
            <TextField id="outlined-basic" label="injaneb" variant="outlined" />
            <TextField
              id="outlined-basic"
              label="karmand vahhed"
              variant="outlined"
            />
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Discription"
              type="email"
              fullWidth
              variant="standard"
            />
            render(
            <DatePicker />, document.getElementById("root"));
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={handleClose}>Subscribe</Button>
          </DialogActions>
        </Dialog>
        <br />
        <Button variant="contained" size="large" style={{ display: "block" }}>
          Large
        </Button>
      </Box>
    </div>
  );
};

export default Leave;
