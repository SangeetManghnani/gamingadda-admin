import React from "react";
import ReactDOM from "react-dom";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import purple from "@material-ui/core/colors/purple";
import orange from "@material-ui/core/colors/orange";
import { MuiPickersUtilsProvider } from "material-ui-pickers";
import DateFnsUtils from "@date-io/date-fns";

// core components
import Admin from "layouts/Admin.jsx";

import "assets/css/material-dashboard-react.css";

const theme = createMuiTheme({
  palette: {
    primary: purple,
    secondary: orange
  }
});
const hist = createBrowserHistory();

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Router history={hist}>
        <Switch>
          <Route path="/admin" component={Admin} />
          <Redirect from="/" to="/admin/dashboard" />
        </Switch>
      </Router>
    </MuiPickersUtilsProvider>
  </MuiThemeProvider>,
  document.getElementById("root")
);
