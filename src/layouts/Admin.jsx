/* eslint-disable */
import React from "react";
import PropTypes from "prop-types";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { compose } from "redux";
import { bindActionCreators } from "redux";
// creates a beautiful scrollbar
import PerfectScrollbar from "perfect-scrollbar";
import "perfect-scrollbar/css/perfect-scrollbar.css";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import Navbar from "components/Navbars/Navbar.jsx";
import Footer from "components/Footer/Footer.jsx";
import Sidebar from "components/Sidebar/Sidebar.jsx";

import routes from "routes.js";

import dashboardStyle from "assets/jss/material-dashboard-react/layouts/dashboardStyle.jsx";
import getMatchesFromDb from "utils/firebase/read";

// side bar image change here
import image from "assets/img/sidebar-2.jpg";
import logo from "assets/img/reactlogo.png";

import { setMatches } from "redux/actions/MatchActions";

// const switchRoutes = (
//   <Switch>
//     {routes.map((prop, key) => {
//       if (prop.layout === "/admin") {
//         return (
//           <Route
//             path={prop.layout + prop.path}
//             component={prop.component}
//             key={key}
//           />
//         );
//       }
//     })}
//   </Switch>
// );

function mapStateToProps(state) {
  return { matches: state.matchesReducer };
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({ setMatches }, dispatch);
}

const switchRoutes = extraProps => {
  return (
    <Switch>
      {routes.map((prop, key) => {
        if (prop.layout === "/admin") {
          return (
            <Route
              path={prop.layout + prop.path}
              component={prop.component}
              key={key}
              parentProps={extraProps}
            />
          );
        }
      })}
    </Switch>
  );
};

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image: image,
      color: "orange",
      hasImage: true,
      fixedClasses: "dropdown show",
      mobileOpen: false,
      matches: []
    };
  }
  handleDrawerToggle = () => {
    this.setState({ mobileOpen: !this.state.mobileOpen });
  };
  getRoute() {
    return this.props.location.pathname !== "/admin/maps";
  }
  isMatches() {
    return this.props.location.pathname === "/admin/matches";
  }
  resizeFunction = () => {
    if (window.innerWidth >= 960) {
      this.setState({ mobileOpen: false });
    }
  };
  componentDidMount() {
    if (navigator.platform.indexOf("Win") > -1) {
      const ps = new PerfectScrollbar(this.refs.mainPanel);
    }
    window.addEventListener("resize", this.resizeFunction);
    getMatchesFromDb().then(data => {
      this.props.setMatches(data);
    });
    // getMatchesFromDb().then(data => {
    //   if (this.state.matches.length <= 0 && data.length > 0) {
    //     const matches = Object.assign({}, data);
    //     this.setState({
    //       matches
    //     });
    //   }
    // });
  }
  componentDidUpdate(e) {
    console.log(this.props.matches);
    if (e.history.location.pathname !== e.location.pathname) {
      this.refs.mainPanel.scrollTop = 0;
      if (this.state.mobileOpen) {
        this.setState({ mobileOpen: false });
      }
    }
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.resizeFunction);
  }
  render() {
    const { classes, ...rest } = this.props;
    return (
      <div className={classes.wrapper}>
        <Sidebar
          routes={routes}
          logoText={"Gaming Adda"}
          logo={logo}
          image={this.state.image}
          handleDrawerToggle={this.handleDrawerToggle}
          open={this.state.mobileOpen}
          color={this.state.color}
          {...rest}
        />
        <div className={classes.mainPanel} ref="mainPanel">
          <Navbar
            routes={routes}
            handleDrawerToggle={this.handleDrawerToggle}
            {...rest}
          />
          {/* On the /maps route we want the map to be on full screen - this is not possible if the content and conatiner classes are present because they have some paddings which would make the map smaller */}
          <div className={classes.content}>
            {this.isMatches ? (
              <div className={classes.container}>
                {switchRoutes(this.state.matches)}
              </div>
            ) : (
              <div className={classes.container}>{switchRoutes("")}</div>
            )}
          </div>
          {/* {this.getRoute() ? (
            <div className={classes.content}>
              <div className={classes.container}>{switchRoutes("")}</div>
            </div>
          ) : (
            <div className={classes.map}>{switchRoutes}</div>
          )} */}
          {this.getRoute() ? <Footer /> : null}
        </div>
      </div>
    );
  }
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default compose(
  connect(
    mapStateToProps,
    matchDispatchToProps
  ),
  withStyles(dashboardStyle)
)(Dashboard);
