import { AppBar, IconButton, Toolbar, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./Home/Home";
import Project from "./Project/Project";
import Users from "./Users/Users";

const useStyles = makeStyles((theme) => ({
  title: {
    margin: "auto",
  },
  root: { background: "#20bcd3" },
}));

const App = () => {
  const classes = useStyles();

  return (
    <div style={{ width: "98%", margin: "auto" }}>
      <AppBar position="static" className={classes.root}>
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            <b>Github Dashboard Sample</b>
          </Typography>
        </Toolbar>
      </AppBar>
      <Router>
        <Switch>
          <Route path="/Users">
            <Users />
          </Route>
          <Route path="/Project">
            <Project />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
