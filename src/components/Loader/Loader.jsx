import React from "react";
import PropTypes from "prop-types";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import CircularProgress from "@material-ui/core/CircularProgress";

const styles = {
  overlay: {
    display: "flex",
    position: "fixed",
    top: "0",
    right: "0",
    zIndex: "100",
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    background: "rgba(0,0,0,0.4)"
  }
};

function Loader({ ...props }) {
  const {
    classes,
    className,
    children,
    plain,
    profile,
    chart,
    ...rest
  } = props;

  return (
    <div className={classes.overlay}>
      <CircularProgress color="primary" />
    </div>
  );
}

export default withStyles(styles)(Loader);
