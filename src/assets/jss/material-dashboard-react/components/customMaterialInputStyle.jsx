import {
  primaryColor,
  dangerColor,
  successColor,
  grayColor,
  defaultFont,
  themeDarkOne
} from "assets/jss/material-dashboard-react.jsx";

const customMaterialInputStyle = {
  customMaterialInput: {
    "& label": {
      ...defaultFont,
      color: themeDarkOne.textColor[0] + " !important",
      fontWeight: "400",
      fontSize: "14px",
      lineHeight: "1.42857"
    },
    // "& .MuiInput-underline-407": {
    //   "& :hover": {
    //     borderBottom: `2px solid ${themeDarkOne.textColor[0]}`
    //   }
    // },
    "& .MuiInput-underline-407:after": {
      borderBottom: `2px solid ${themeDarkOne.textColor[0]}`
    },
    "& .MuiInput-underline-408:after": {
      borderBottom: `2px solid ${themeDarkOne.textColor[0]}`
    },
    "& input": {
      color: themeDarkOne.textColor[0],
      "& :after": {
        borderBottom: `2px solid ${themeDarkOne.textColor[0]}`
      }
    }
  }
};

export default customMaterialInputStyle;
