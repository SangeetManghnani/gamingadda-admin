import React, { Fragment, useState } from "react";
import { DateTimePicker } from "material-ui-pickers";
import { Formik, Form, Field } from "formik";

const DatePickerMaterial = ({ field, form, ...other }) => {
  const currentError = form.errors[field.name];
  return (
    <DateTimePicker
      autoOk
      clearable
      disablePast
      ampm={true}
      name={field.name}
      value={field.value}
      onChange={dateTime => {
        console.log(dateTime);
        form.setFieldValue(field.name, dateTime, true);
      }}
      label="Select Date and Time"
      onError={(_, error) => form.setFieldError(field.name, error)}
      helperText={currentError}
      error={Boolean(currentError)}
    />
  );
};

export default DatePickerMaterial;
