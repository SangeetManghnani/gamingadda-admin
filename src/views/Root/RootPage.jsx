import React from "react";
import { withRouter } from "react-router-dom";
import { NavLink } from "react-router-dom";
import withStyles from "@material-ui/core/styles/withStyles";

import { compose } from "redux";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { setAdminLoginStatus } from "redux/actions/LoginActions";

import Dashboard from "layouts/Admin.jsx";
import LoginPage from "views/Login/LoginPage.jsx";
import ProtectedRoute from "components/ProtectedRoute.jsx";

import CookiesFunc from "utils/cookies.js";

function mapStateToProps(state) {
  return {
    isLoggedIn: state.loginReducer.loginStatus
  };
}
function mapDipatchToProps(dispatch) {
  return bindActionCreators({ setAdminLoginStatus }, dispatch);
}

const styles = {
  gamingAddaAdmin: {
    width: "100%",
    height: "100%"
  }
};
class RootPage extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    const loginCookie = CookiesFunc.getCookie("isGamingAddaAdminLoggedIn");
    if (loginCookie && !this.props.isLoggedIn) {
      this.props.setAdminLoginStatus(true);
      this.props.history.push("/admin/matches");
    }
    // if (
    //   localStorage.getItem("isGamingAddaAdminLoggedIn") &&
    //   !this.props.isLoggedIn
    // ) {
    //   this.props.setAdminLoginStatus(true);
    //   this.props.history.push("/admin/matches");
    // }
  }
  renderDashboard = () => {
    let toRender = "";
    if (this.props.isLoggedIn) {
      toRender = (
        <Dashboard
          history={this.props.history}
          location={this.props.location}
        />
      );
    } else {
      toRender = (
        <LoginPage
          history={this.props.history}
          pathname={this.props.location.pathname}
        />
      );
    }

    return toRender;
  };
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.gamingAddaAdmin}>
        {this.renderDashboard()}
        {/* <ProtectedRoute
          authenticated={this.props.isLoggedIn}
          path="/admin/matches"
          component={Dashboard}
        /> */}
      </div>
    );
  }
}

export default compose(
  connect(
    mapStateToProps,
    mapDipatchToProps
  ),
  withStyles(styles)
)(RootPage);
