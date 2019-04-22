import React from "react";
import PropTypes from "prop-types";
import { Formik, Field, Form } from "formik";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TextField from "@material-ui/core/TextField";
// core components

import CustomMaterialInput from "components/CustomMaterialInput/CustomMaterialInput";
import Button from "components/CustomButtons/Button.jsx";
import tableStyle from "assets/jss/material-dashboard-react/components/tableStyle.jsx";

function CustomTable({ ...props }) {
  const { classes, tableHead, tableData, tableHeaderColor } = props;
  return (
    <div className={classes.tableResponsive}>
      <Table className={classes.table}>
        {tableHead !== undefined ? (
          <TableHead className={classes[tableHeaderColor + "TableHeader"]}>
            <TableRow>
              {tableHead.map((prop, key) => {
                return (
                  <TableCell
                    className={classes.tableCell + " " + classes.tableHeadCell}
                    key={key}
                  >
                    {prop}
                  </TableCell>
                );
              })}
            </TableRow>
          </TableHead>
        ) : null}
        <TableBody>
          {tableData.map((ele, key) => {
            return (
              <Formik
                onSubmit={(values, { setSubmitting }) => {
                  console.log(values);
                }}
              >
                {({
                  values,
                  errors,
                  touched,
                  handleChange,
                  handleBlur,
                  handleSubmit,
                  isSubmitting
                }) => (
                  <TableRow key={key}>
                    <TableCell className={classes.tableCell} key={key + 1}>
                      {ele}
                    </TableCell>
                    <TableCell className={classes.tableCell}>
                      <Field
                        type="text"
                        label="Kills"
                        name="kills"
                        value={values.kills}
                        className={
                          errors.kills && touched.kills
                            ? "text-input error"
                            : "text-input"
                        }
                        component={CustomMaterialInput}
                      />
                    </TableCell>
                    <TableCell className={classes.tableCell}>
                      <Field
                        type="text"
                        label="Rank"
                        name="rank"
                        value={values.rank}
                        className={
                          errors.rank && touched.rank
                            ? "text-input error"
                            : "text-input"
                        }
                        component={CustomMaterialInput}
                      />
                    </TableCell>
                    <TableCell className={classes.tableCell}>
                      <Field
                        type="text"
                        label="Paytm"
                        name="paytm"
                        value={values.paytm}
                        className={
                          errors.paytm && touched.paytm
                            ? "text-input error"
                            : "text-input"
                        }
                        component={CustomMaterialInput}
                      />
                    </TableCell>
                    <TableCell className={classes.tableCell}>
                      <Button
                        color="primary"
                        type="submit"
                        disabled={isSubmitting}
                      >
                        Save n Send
                      </Button>
                    </TableCell>
                  </TableRow>
                )}
              </Formik>
            );
          })}
          {/* {tableData.map((prop, key) => {
            return (
              <TableRow key={key}>
                {prop.map((prop, key) => {
                  return (
                    <TableCell className={classes.tableCell} key={key}>
                      {prop}
                    </TableCell>
                  );
                })}
                <TableCell className={classes.tableCell}>
                  <input name="payment" />
                </TableCell>
              </TableRow>
            );
          })} */}
        </TableBody>
      </Table>
    </div>
  );
}

CustomTable.defaultProps = {
  tableHeaderColor: "gray"
};

CustomTable.propTypes = {
  classes: PropTypes.object.isRequired,
  tableHeaderColor: PropTypes.oneOf([
    "warning",
    "primary",
    "danger",
    "success",
    "info",
    "rose",
    "gray"
  ]),
  tableHead: PropTypes.arrayOf(PropTypes.string),
  tableData: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string))
};

export default withStyles(tableStyle)(CustomTable);
