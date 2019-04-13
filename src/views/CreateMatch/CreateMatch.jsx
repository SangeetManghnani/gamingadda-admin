import React from "react";
import { withRouter } from "react-router-dom";
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
import Loader from "components/Loader/Loader.jsx";

import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";

import DatePickerMaterial from "components/DatePicker/DatePicker.jsx";

import { Formik, Field, Form } from "formik";
import { TextField } from "formik-material-ui";
import { RadioGroup } from "formik-material-ui";
// import { compose } from "redux";

import MuiTextField from "@material-ui/core/TextField";

import CustomMaterialInput from "components/CustomMaterialInput/CustomMaterialInput";

import CreateMatchSchema from "utils/CreateMatchValidation";
import createMatchInDb from "utils/firebase/write";
import { themeDarkOne } from "../../assets/jss/material-dashboard-react";

const styles = {
  cardTitleWhite: {
    color: themeDarkOne.primaryColor[0],
    fontSize: "1.2rem",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none"
  },
  gridMargin1: {
    marginTop: "1rem"
  },
  gridMargin2: {
    marginTop: "2rem",
    "& label": {
      color: themeDarkOne.textColor[0] + " !important",
      fontWeight: "400",
      fontSize: "14px",
      lineHeight: "1.42857"
    },
    "& .MuiInput-underline-408:after": {
      borderBottom: `2px solid ${themeDarkOne.textColor[0]}`
    },
    "& .MuiInput-underline-407:after": {
      borderBottom: `2px solid ${themeDarkOne.textColor[0]}`
    },
    "& input": {
      color: themeDarkOne.textColor[0],
      "& :after": {
        borderBottom: `2px solid ${themeDarkOne.textColor[0]}`
      }
    }
  },
  radioElement: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    "& span": {
      color: `${themeDarkOne.textColor[0]} !important`
    }
  },
  datePickerElement: {
    "& label": {
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
    "& input": {
      color: themeDarkOne.textColor[0],
      "& :after": {
        borderBottom: `2px solid ${themeDarkOne.textColor[0]}`
      }
    }
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
                createMatchInDb("123", values)
                  .then(result => {
                    // use notification and change page
                    setSubmitting(false);
                    this.props.history.push("/admin/matches");
                    console.log(result.status);
                  })
                  .catch(err => {
                    // use notification and set submitting fale
                  });
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
                  {isSubmitting ? <Loader /> : null}
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
                      <GridContainer className={classes.gridMargin1}>
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
                      <GridContainer className={classes.gridMargin2}>
                        <GridItem xs={12} sm={12} md={12}>
                          <Field
                            type="text"
                            label="Runner"
                            name="dateTimeOfMatch"
                            value={values.dateTimeOfMatch}
                            component={DatePickerMaterial}
                            className={classes.datePickerElement}
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

// export default compose(
//   withRouter,
//   withStyles(styles)
// )(CreateMatch);

export default withStyles(styles)(CreateMatch);
