import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";

//css styles
const useStyles = makeStyles((theme) => ({
  title: {
    margin: "auto",
  },

  root: {
    display: "flex",

    width: "100%",

    marginTop: "50%",
    justifyContent: "center",
  },
}));

const Home = () => {
  const history = useHistory();
  const classes = useStyles();

  const [userInput, setUserInput] = useState([]);

  const handleSearch = (e) => {
    setUserInput(e.target.value);
  };

  const handleClick = () => {
    history.push({
      pathname: "/Users",
      state: { userInput },
    });
  };

  return (
    <div className={classes.root}>
      <TextField
        onChange={handleSearch}
        style={{ float: "left" }}
        id="standard-search"
        label="Search"
        type="search"
      />
      <Button
        onClick={handleClick}
        style={{ marginTop: "2.5%", marginLeft: "2%" }}
        variant="contained"
        color="secondary"
      >
        Search
      </Button>
    </div>
  );
};

export default Home;
