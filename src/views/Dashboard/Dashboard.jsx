import React from "react";
import PropTypes from "prop-types";
// @material-ui/core
import withStyles from "@material-ui/core/styles/withStyles";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
// core components
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardIcon from "components/Card/CardIcon.jsx";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { Row, Col } from "react-flexbox-grid";

import dashboardStyle from "assets/jss/material-dashboard-react/views/dashboardStyle.jsx";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0
    };
  }

  componentDidMount = () => {
    console.log(this.props.route);
  };
  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = index => {
    this.setState({ value: index });
  };
  render() {
    const { classes } = this.props;
    return (
      <div>
        <GridContainer>
          <GridItem xs={12} sm={6} md={6}>
            <Card>
              <CardHeader color="warning" stats icon>
                <p className={classes.cardCategory}>Match id: 12121</p>
              </CardHeader>
              <div className={classes.details}>
                <CardContent className={classes.content}>
                  <Row around="xs">
                    <Col className={classes.dataColumns} xs>
                      <Typography variant="p">Pool</Typography>
                      <Typography variant="p" className={classes.boldText}>
                        7000
                      </Typography>
                    </Col>
                    <Col className={classes.dataColumns} xs>
                      <Typography variant="p">Per Kill</Typography>
                      <Typography variant="p" className={classes.boldText}>
                        50
                      </Typography>
                    </Col>
                    <Col className={classes.dataColumns} xs>
                      <Typography variant="p">Entry</Typography>
                      <Typography variant="p" className={classes.boldText}>
                        100
                      </Typography>
                    </Col>
                  </Row>
                  <Row around="xs" className={classes.middleRow}>
                    <Col className={classes.dataColumns} xs>
                      <Typography
                        variant="p"
                        className={classes.middleRowDetails}
                      >
                        Erangel
                      </Typography>
                    </Col>
                    <Col className={classes.dataColumns} xs>
                      <Typography
                        variant="p"
                        className={classes.middleRowDetails}
                      >
                        Mar 3, Sat
                      </Typography>
                    </Col>
                    <Col className={classes.dataColumns} xs>
                      <Typography
                        variant="p"
                        className={classes.middleRowDetails}
                      >
                        11:00 am
                      </Typography>
                    </Col>
                    <Col className={classes.dataColumns} xs>
                      <Typography
                        variant="p"
                        className={classes.middleRowDetails}
                      >
                        Squad
                      </Typography>
                    </Col>
                  </Row>
                </CardContent>
              </div>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={6} md={6}>
            <Card>
              <CardHeader color="warning" stats icon>
                <p className={classes.cardCategory}>Used Space</p>
              </CardHeader>
              <div className={classes.details}>
                <CardContent className={classes.content}>
                  <Row around="xs">
                    <Col className={classes.dataColumns} xs>
                      <Typography variant="p">Pool</Typography>
                      <Typography variant="p" className={classes.boldText}>
                        7000
                      </Typography>
                    </Col>
                    <Col className={classes.dataColumns} xs>
                      <Typography variant="p">Per Kill</Typography>
                      <Typography variant="p" className={classes.boldText}>
                        50
                      </Typography>
                    </Col>
                    <Col className={classes.dataColumns} xs>
                      <Typography variant="p">Entry</Typography>
                      <Typography variant="p" className={classes.boldText}>
                        100
                      </Typography>
                    </Col>
                  </Row>
                  <Row around="xs" className={classes.middleRow}>
                    <Col className={classes.dataColumns} xs>
                      <Typography
                        variant="p"
                        className={classes.middleRowDetails}
                      >
                        Erangel
                      </Typography>
                    </Col>
                    <Col className={classes.dataColumns} xs>
                      <Typography
                        variant="p"
                        className={classes.middleRowDetails}
                      >
                        Mar 3, Sat
                      </Typography>
                    </Col>
                    <Col className={classes.dataColumns} xs>
                      <Typography
                        variant="p"
                        className={classes.middleRowDetails}
                      >
                        11:00 am
                      </Typography>
                    </Col>
                    <Col className={classes.dataColumns} xs>
                      <Typography
                        variant="p"
                        className={classes.middleRowDetails}
                      >
                        Squad
                      </Typography>
                    </Col>
                  </Row>
                </CardContent>
              </div>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(dashboardStyle)(Dashboard);
