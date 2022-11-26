import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import useStyle from "./styles.js";
import { Link } from "react-router-dom";

const Home = () => {
  const classes = useStyle();
  return (
    <div>
      {" "}
      <Box sx={{ "& button": { m: 1 } }}>
        <div className={classes.root}>
          <Link to={"/leave"}>
            <Button
              variant="contained"
              size="small"
              style={{ display: "block" }}
            >
              small
            </Button>
          </Link>
          <Button
            variant="contained"
            size="medium"
            style={{ display: "block" }}
          >
            Medium
          </Button>
          <Button variant="contained" size="large" style={{ display: "block" }}>
            Large
          </Button>
        </div>
      </Box>
    </div>
  );
};

export default Home;
