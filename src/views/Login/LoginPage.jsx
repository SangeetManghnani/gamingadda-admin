import React, { useState } from "react";
import PropTypes from "prop-types";

import { compose } from "redux";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import {
  setAdminLoginStatus,
  isAdminLogingIn
} from "redux/actions/LoginActions";

// move this to redux
import firebase from "utils/firebase/setup.js";

import CookiesFunc from "utils/cookies.js";

import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/core/styles/withStyles";

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ setAdminLoginStatus, isAdminLogingIn }, dispatch);
}

const styles = theme => ({
  main: {
    width: "auto",
    display: "block", // Fix IE 11 issue.
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: "auto",
      marginRight: "auto"
    }
  },
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme
      .spacing.unit * 3}px`
  },
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing.unit
  },
  submit: {
    marginTop: theme.spacing.unit * 3
  }
});

function LoginPage(props) {
  const { classes } = props;
  const [email, setEmail] = useState(0);
  const [password, setPassword] = useState(1);
  return (
    <main className={classes.main}>
      <CssBaseline />
      <Paper className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Hello Admin, Please Sign in
        </Typography>
        <form className={classes.form}>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="email">Email Address</InputLabel>
            <Input
              id="email"
              name="email"
              autoComplete="email"
              onChange={e => setEmail(e.currentTarget.value)}
              autoFocus
            />
          </FormControl>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="password">Password</InputLabel>
            <Input
              name="password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={e => setPassword(e.currentTarget.value)}
            />
          </FormControl>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={e => {
              e.preventDefault();
              props.isAdminLogingIn(true);
              firebase
                .auth()
                .signInWithEmailAndPassword(email, password)
                .then(user => {
                  props.setAdminLoginStatus(true);
                  props.isAdminLogingIn(false);
                  CookiesFunc.setCookie("isGamingAddaAdminLoggedIn", true);
                  // localStorage.setItem("isGamingAddaAdminLoggedIn", true);
                  props.history.push("/admin/matches");
                })
                .catch(error => {
                  props.setAdminLoginStatus(false);
                  props.isAdminLogingIn(false);
                });
            }}
          >
            Sign in
          </Button>
        </form>
      </Paper>
    </main>
  );
}

LoginPage.propTypes = {
  classes: PropTypes.object.isRequired
};

export default compose(
  connect(
    null,
    mapDispatchToProps
  ),
  withStyles(styles)
)(LoginPage);
