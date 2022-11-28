import React from "react";
import ReactDOM from "react-dom/client";
import useStyle from "./styles.js";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { RangeDatePicker, DatePicker } from "jalali-react-datepicker";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Leave = () => {
  const classes = useStyle();
  const [open, setOpen] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleClickOpen2 = () => {
    setOpen2(true);
  };

  const handleClose2 = () => {
    setOpen2(false);
  };
  function submitExample({ start, end }) {
    console.log("start ", start);
    console.log("end ", end);
  }
  function submitExample_ws({ value }) {
    console.log("value ", value);
  }
  const validationSucess = () => {
    if (submitExample_ws !== "") {
      toast.success("شما با موفقیت ثبت نام  شدید");
      setOpen2(false);
    } else {
      setOpen2(true);
      toast.error("گلابی ");
    }
  };
  return (
    <div className={classes.root}>
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

            <RangeDatePicker
              render
              timePicker
              isRenderingButtons="boolean"
              onClickSubmitButton={submitExample}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={handleClose}>Subscribe</Button>
          </DialogActions>
        </Dialog>
        <br />
        <Button variant="outlined" onClick={handleClickOpen2}>
          Large
        </Button>
        <Dialog open={open2} onClose={handleClose2}>
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

            <DatePicker
              isRenderingButtons="boolean"
              onClickSubmitButton={submitExample_ws}
              disabled
            />
            <DatePicker
              isRenderingButtons="boolean"
              onClickSubmitButton={submitExample_ws}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose2}>Cancel</Button>
            <Button onClick={validationSucess}>Subscribe</Button>
          </DialogActions>
        </Dialog>
      </Box>
    </div>
  );
};

export default Leave;
