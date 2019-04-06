import {
  primaryColor,
  dangerColor,
  successColor,
  grayColor,
  defaultFont
} from "assets/jss/material-dashboard-react.jsx";

const customMaterialInputStyle = {
  customMaterialInput: {
    "& label": {
      ...defaultFont,
      color: grayColor[3] + " !important",
      fontWeight: "400",
      fontSize: "14px",
      lineHeight: "1.42857"
    }
  }
};

export default customMaterialInputStyle;
