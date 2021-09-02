import { Typography } from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { makeStyles } from "@material-ui/core/styles";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  border: { border: "2px solid #E8E8E8" },
  center: { textAlign: "center" },
  identity: { fontSize: "24px", fontWeight: "600" },
  project: { fontSize: "14px", fontWeight: "500" },
}));
const Project = () => {
  const classes = useStyles();
  const location = useLocation();

  const [repo, setRepo] = useState({});

  useEffect(() => {
    setRepo(location.state.repo);
  }, [location.state.repo]);

  return (
    <Grid item xs={12} md={6}>
      <div className={classes.border}>
        <List>
          <ListItem>
            <Avatar alt="User" src={repo.owner?.avatar_url} />
            <ListItemText
              className={classes.center}
              primary={repo.owner?.login}
              secondary={repo.owner?.url}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              className={classes.center}
              primary={
                <Typography
                  variant="body1"
                  display="block"
                  className={classes.identity}
                >
                  {repo.name}
                </Typography>
              }
              secondary={repo.language}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              className={classes.center}
              primary={
                <Typography
                  variant="body1"
                  display="block"
                  className={classes.project}
                >
                  {repo.description}
                </Typography>
              }
            />
          </ListItem>
        </List>
      </div>
    </Grid>
  );
};

export default Project;
