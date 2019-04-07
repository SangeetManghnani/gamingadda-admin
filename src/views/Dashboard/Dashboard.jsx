import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { compose } from "redux";
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

function mapStateToProps(state) {
  return { matches: state.matchesReducer.matches };
}
class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0
    };

    this.renderMatchCards = this.renderMatchCards.bind(this);
  }

  componentDidMount = () => {
    console.log(this.props.matches);
  };
  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = index => {
    this.setState({ value: index });
  };
  renderMatchCards = classes => {
    const matches = [];
    this.props.matches.map(match => {
      const matchDetails = match.matchDetails;
      matches.push(
        <GridItem xs={12} sm={6} md={6}>
          <Card>
            <CardHeader color="warning" stats icon>
              <p className={classes.cardCategory}>Match id: {match.matchId}</p>
            </CardHeader>
            <div className={classes.details}>
              <CardContent className={classes.content}>
                <Row around="xs">
                  <Col className={classes.dataColumns} xs>
                    <Typography variant="p">Pool</Typography>
                    <Typography variant="p" className={classes.boldText}>
                      {matchDetails.pool}
                    </Typography>
                  </Col>
                  <Col className={classes.dataColumns} xs>
                    <Typography variant="p">Per Kill</Typography>
                    <Typography variant="p" className={classes.boldText}>
                      {matchDetails.perKill}
                    </Typography>
                  </Col>
                  <Col className={classes.dataColumns} xs>
                    <Typography variant="p">Entry</Typography>
                    <Typography variant="p" className={classes.boldText}>
                      {matchDetails.entryFee}
                    </Typography>
                  </Col>
                </Row>
                <Row around="xs" className={classes.middleRow}>
                  <Col className={classes.dataColumns} xs>
                    <Typography
                      variant="p"
                      className={classes.middleRowDetails}
                    >
                      {matchDetails.map}
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
                      {matchDetails.type}
                    </Typography>
                  </Col>
                </Row>
              </CardContent>
            </div>
          </Card>
        </GridItem>
      );
    });
    return matches;
  };
  render() {
    const { classes } = this.props;
    return (
      <div>
        <GridContainer>{this.renderMatchCards(classes)}</GridContainer>
      </div>
    );
  }
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default compose(
  connect(mapStateToProps),
  withStyles(dashboardStyle)
)(Dashboard);
