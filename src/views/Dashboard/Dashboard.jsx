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
  state = {
    value: 0
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
                      <Typography variant="p">*</Typography>
                      <Typography
                        variant="p"
                        className={classes.middleRowDetails}
                      >
                        Erangel
                      </Typography>
                    </Col>
                    <Col className={classes.dataColumns} xs>
                      <Typography variant="p">*</Typography>
                      <Typography
                        variant="p"
                        className={classes.middleRowDetails}
                      >
                        Mar 3, Sat
                      </Typography>
                    </Col>
                    <Col className={classes.dataColumns} xs>
                      <Typography variant="p">*</Typography>
                      <Typography
                        variant="p"
                        className={classes.middleRowDetails}
                      >
                        11:00 am
                      </Typography>
                    </Col>
                    <Col className={classes.dataColumns} xs>
                      <Typography variant="p">*</Typography>
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
                      <Typography variant="p">*</Typography>
                      <Typography
                        variant="p"
                        className={classes.middleRowDetails}
                      >
                        Erangel
                      </Typography>
                    </Col>
                    <Col className={classes.dataColumns} xs>
                      <Typography variant="p">*</Typography>
                      <Typography
                        variant="p"
                        className={classes.middleRowDetails}
                      >
                        Mar 3, Sat
                      </Typography>
                    </Col>
                    <Col className={classes.dataColumns} xs>
                      <Typography variant="p">*</Typography>
                      <Typography
                        variant="p"
                        className={classes.middleRowDetails}
                      >
                        11:00 am
                      </Typography>
                    </Col>
                    <Col className={classes.dataColumns} xs>
                      <Typography variant="p">*</Typography>
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
        {/* <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <Card chart>
              <CardHeader color="success">
                <ChartistGraph
                  className="ct-chart"
                  data={dailySalesChart.data}
                  type="Line"
                  options={dailySalesChart.options}
                  listener={dailySalesChart.animation}
                />
              </CardHeader>
              <CardBody>
                <h4 className={classes.cardTitle}>Daily Sales</h4>
                <p className={classes.cardCategory}>
                  <span className={classes.successText}>
                    <ArrowUpward className={classes.upArrowCardCategory} /> 55%
                  </span>{" "}
                  increase in today sales.
                </p>
              </CardBody>
              <CardFooter chart>
                <div className={classes.stats}>
                  <AccessTime /> updated 4 minutes ago
                </div>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card chart>
              <CardHeader color="warning">
                <ChartistGraph
                  className="ct-chart"
                  data={emailsSubscriptionChart.data}
                  type="Bar"
                  options={emailsSubscriptionChart.options}
                  responsiveOptions={emailsSubscriptionChart.responsiveOptions}
                  listener={emailsSubscriptionChart.animation}
                />
              </CardHeader>
              <CardBody>
                <h4 className={classes.cardTitle}>Email Subscriptions</h4>
                <p className={classes.cardCategory}>
                  Last Campaign Performance
                </p>
              </CardBody>
              <CardFooter chart>
                <div className={classes.stats}>
                  <AccessTime /> campaign sent 2 days ago
                </div>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card chart>
              <CardHeader color="danger">
                <ChartistGraph
                  className="ct-chart"
                  data={completedTasksChart.data}
                  type="Line"
                  options={completedTasksChart.options}
                  listener={completedTasksChart.animation}
                />
              </CardHeader>
              <CardBody>
                <h4 className={classes.cardTitle}>Completed Tasks</h4>
                <p className={classes.cardCategory}>
                  Last Campaign Performance
                </p>
              </CardBody>
              <CardFooter chart>
                <div className={classes.stats}>
                  <AccessTime /> campaign sent 2 days ago
                </div>
              </CardFooter>
            </Card>
          </GridItem>
        </GridContainer> */}
        {/* <GridContainer>
          <GridItem xs={12} sm={12} md={6}>
            <CustomTabs
              title="Tasks:"
              headerColor="primary"
              tabs={[
                {
                  tabName: "Bugs",
                  tabIcon: BugReport,
                  tabContent: (
                    <Tasks
                      checkedIndexes={[0, 3]}
                      tasksIndexes={[0, 1, 2, 3]}
                      tasks={bugs}
                    />
                  )
                },
                {
                  tabName: "Website",
                  tabIcon: Code,
                  tabContent: (
                    <Tasks
                      checkedIndexes={[0]}
                      tasksIndexes={[0, 1]}
                      tasks={website}
                    />
                  )
                },
                {
                  tabName: "Server",
                  tabIcon: Cloud,
                  tabContent: (
                    <Tasks
                      checkedIndexes={[1]}
                      tasksIndexes={[0, 1, 2]}
                      tasks={server}
                    />
                  )
                }
              ]}
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={6}>
            <Card>
              <CardHeader color="warning">
                <h4 className={classes.cardTitleWhite}>Employees Stats</h4>
                <p className={classes.cardCategoryWhite}>
                  New employees on 15th September, 2016
                </p>
              </CardHeader>
              <CardBody>
                <Table
                  tableHeaderColor="warning"
                  tableHead={["ID", "Name", "Salary", "Country"]}
                  tableData={[
                    ["1", "Dakota Rice", "$36,738", "Niger"],
                    ["2", "Minerva Hooper", "$23,789", "Curaçao"],
                    ["3", "Sage Rodriguez", "$56,142", "Netherlands"],
                    ["4", "Philip Chaney", "$38,735", "Korea, South"]
                  ]}
                />
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer> */}
      </div>
    );
  }
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(dashboardStyle)(Dashboard);
