import {
  blackColor,
  whiteColor,
  hexToRgb,
  themeDarkOne
} from "assets/jss/material-dashboard-react.jsx";

const cardStyle = {
  card: {
    border: "0",
    marginBottom: "15px",
    marginTop: "15px",
    borderRadius: "6px",
    color: "rgba(" + hexToRgb(whiteColor) + ", 0.87)",
    background: themeDarkOne.primaryColor[0],
    width: "100%",
    boxShadow: "0 1px 4px 0 rgba(" + hexToRgb(blackColor) + ", 0.14)",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    minWidth: "0",
    wordWrap: "break-word",
    fontSize: ".875rem",
    border: `1px solid ${themeDarkOne.borderColor[0]}`
  },
  cardPlain: {
    background: "transparent",
    boxShadow: "none"
  },
  cardProfile: {
    marginTop: "30px",
    textAlign: "center"
  },
  cardChart: {
    "& p": {
      marginTop: "0px",
      paddingTop: "0px"
    }
  }
};

export default cardStyle;
