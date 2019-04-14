import React from "react";
import PropTypes from "prop-types";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import CircularProgress from "@material-ui/core/CircularProgress";
import Lottie from "react-lottie";
import animationData from "../../utils/animations/loader.json";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice"
  }
};

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
      {/* <CircularProgress color="primary" /> */}
      <Lottie
        options={defaultOptions}
        height={400}
        width={400}
        isStopped={false}
        isPaused={false}
      />
    </div>
  );
}

export default withStyles(styles)(Loader);
