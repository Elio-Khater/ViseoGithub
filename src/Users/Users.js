import Avatar from "@material-ui/core/Avatar";
import Chip from "@material-ui/core/Chip";
import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { makeStyles } from "@material-ui/core/styles";
import InboxIcon from "@material-ui/icons/Inbox";
import React, { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  header: { width: "100%", textAlign: "center", padding: "2%" },
  center: { textAlign: "center" },
}));

const Users = () => {
  const [userName, setUserName] = useState("");
  const [avatar, setAvatar] = useState("");
  const [repos, setRepos] = useState([]);
  const [error, setError] = useState("");
  const classes = useStyles();
  const location = useLocation();
  const history = useHistory();

  useEffect(() => {
    const getUserInformation = (username) => {
      fetch(`https://api.github.com/users/${username}`)
        .then((res) => res.json())
        .then((data) => {
          if (data.message) {
            setError(data.message);
          } else {
            setUserData(data);
          }
        });
    };

    const getUserRepos = (username) => {
      fetch(`https://api.github.com/users/${username}/repos`)
        .then((res) => res.json())
        .then((data) => {
          setReposData(data);
        });
    };

    getUserInformation(location.state.userInput);
    getUserRepos(location.state.userInput);
  }, [location.state.userInput]);

  const setUserData = ({ login, avatar_url }) => {
    setUserName(login);
    setAvatar(avatar_url);
  };

  const setReposData = (data) => {
    setRepos(data);
  };

  const handleClick = (repo) => {
    history.push({
      pathname: "/Project",
      state: { repo },
    });
  };

  return (
    <div>
      {error ? (
        <h1 className={classes.center}>User not found</h1>
      ) : (
        <div>
          <div className={classes.header}>
            <Chip
              avatar={<Avatar alt="User" src={avatar} />}
              label={userName}
            />
          </div>
          <Grid item xs={12} md={6}>
            <div className={classes.demo}>
              <List>
                {repos.map((repo) => (
                  <ListItem
                    key={repo.id}
                    button
                    onClick={() => handleClick(repo)}
                  >
                    <ListItemIcon>
                      <InboxIcon />
                    </ListItemIcon>
                    <ListItemText
                      className={classes.center}
                      primary={repo.name}
                    />
                  </ListItem>
                ))}
              </List>
            </div>
          </Grid>
        </div>
      )}
    </div>
  );
};

export default Users;
