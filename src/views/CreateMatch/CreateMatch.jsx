import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import InputLabel from "@material-ui/core/InputLabel";

// core components
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardAvatar from "components/Card/CardAvatar.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";

import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";

// import { DatePicker } from "material-ui-pickers";
// import DateFnsUtils from "@date-io/date-fns";
// import { MuiPickersUtilsProvider } from "material-ui-pickers";
// import RadioGroup from "@material-ui/core/RadioGroup";

import DatePickerMaterial from "components/DatePicker/DatePicker.jsx";

import { Formik, Field, Form } from "formik";
import { TextField } from "formik-material-ui";
import { RadioGroup } from "formik-material-ui";

import MuiTextField from "@material-ui/core/TextField";

import CustomMaterialInput from "components/CustomMaterialInput/CustomMaterialInput";

import CreateMatchSchema from "utils/CreateMatchValidation";

const styles = {
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none"
  },
  gridMargin: {
    marginTop: "1rem"
  },
  radioElement: {
    display: "flex",
    flexDirection: "row",
    width: "100%"
  }
};
class CreateMatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "squad"
    };
  }
  handleChange = event => {
    this.setState({ value: event.target.value });
  };
  submit = (values, pristineValues) => {
    console.log(values);
  };
  submitSecondForm = model => {
    console.log(model);
  };
  render() {
    const { classes } = this.props;
    return (
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={8}>
            <Formik
              initialValues={{
                type: "",
                map: "",
                pool: "",
                perKill: "",
                winnerPrize: "",
                runnerPrize: "",
                entryFee: "",
                dateTimeOfMatch: new Date()
              }}
              validationSchema={CreateMatchSchema}
              onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                  alert(JSON.stringify(values, null, 2));
                  setSubmitting(false);
                }, 400);
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
                <Card>
                  <Form onSubmit={handleSubmit}>
                    <CardHeader color="primary">
                      <h4 className={classes.cardTitleWhite}>
                        Create New Match
                      </h4>
                    </CardHeader>
                    <CardBody>
                      <GridContainer>
                        <GridItem xs={12} sm={12} md={12}>
                          <Field
                            type="radio"
                            label="Select Type"
                            name="type"
                            component={RadioGroup}
                            className={classes.radioElement}
                          >
                            <FormControlLabel
                              value="squad"
                              control={<Radio />}
                              label="Squad"
                            />
                            <FormControlLabel
                              value="Solo"
                              control={<Radio />}
                              label="Solo"
                            />
                          </Field>
                        </GridItem>
                        <GridItem xs={12} sm={6} md={3}>
                          <Field
                            type="text"
                            label="Map"
                            name="map"
                            value={values.map}
                            className={
                              errors.map && touched.map
                                ? "text-input error"
                                : "text-input"
                            }
                            component={CustomMaterialInput}
                          />
                        </GridItem>
                        <GridItem xs={12} sm={6} md={3}>
                          <Field
                            type="text"
                            label="Pool"
                            name="pool"
                            value={values.pool}
                            component={CustomMaterialInput}
                          />
                        </GridItem>
                        <GridItem xs={12} sm={6} md={3}>
                          <Field
                            type="text"
                            label="Per Kill"
                            name="perKill"
                            value={values.perKill}
                            component={CustomMaterialInput}
                          />
                        </GridItem>
                      </GridContainer>
                      <GridContainer className={classes.prizesContainer}>
                        <GridItem xs={12} sm={6} md={3}>
                          <Field
                            type="text"
                            label="Winner"
                            name="winnerPrize"
                            value={values.winnerPrize}
                            component={CustomMaterialInput}
                          />
                        </GridItem>
                        <GridItem xs={12} sm={6} md={3}>
                          <Field
                            type="text"
                            label="Runner"
                            name="runnerPrize"
                            value={values.runnerPrize}
                            component={CustomMaterialInput}
                          />
                        </GridItem>
                        <GridItem xs={12} sm={6} md={3}>
                          <Field
                            type="text"
                            label="Entry Fee"
                            name="entryFee"
                            value={values.entryFee}
                            component={CustomMaterialInput}
                          />
                        </GridItem>
                      </GridContainer>
                      <GridContainer className={classes.gridMargin}>
                        <GridItem xs={12} sm={12} md={12}>
                          <Field
                            type="text"
                            label="Runner"
                            name="dateTimeOfMatch"
                            value={values.dateTimeOfMatch}
                            component={DatePickerMaterial}
                          />
                        </GridItem>
                      </GridContainer>
                    </CardBody>
                    <CardFooter>
                      <Button
                        color="primary"
                        type="submit"
                        disabled={isSubmitting}
                      >
                        Create
                      </Button>
                    </CardFooter>
                  </Form>
                </Card>
              )}
            </Formik>
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

export default withStyles(styles)(CreateMatch);
