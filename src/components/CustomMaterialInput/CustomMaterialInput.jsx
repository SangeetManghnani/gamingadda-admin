import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
// @material-ui/core components
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
// @material-ui/icons
import Clear from "@material-ui/icons/Clear";
import Check from "@material-ui/icons/Check";
import withStyles from "@material-ui/core/styles/withStyles";

import MuiTextField from "@material-ui/core/TextField";

import {
  fieldToTextField,
  TextField,
  TextFieldProps
} from "formik-material-ui";

import customMaterialInputStyle from "assets/jss/material-dashboard-react/components/customMaterialInputStyle.jsx";

function CustomMaterialInput(props: TextFieldProps) {
  const { classes, error, success } = props;
  return (
    <MuiTextField
      {...fieldToTextField(props)}
      className={classes.customMaterialInput}
      fullWidth
    />
  );
}

export default withStyles(customMaterialInputStyle)(CustomMaterialInput);
