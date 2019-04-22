import React from "react";
import ReactDOM from "react-dom";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import purple from "@material-ui/core/colors/purple";
import orange from "@material-ui/core/colors/orange";
import { MuiPickersUtilsProvider } from "material-ui-pickers";
import DateFnsUtils from "@date-io/date-fns";
import { Provider } from "react-redux";
import configureStore from "./store";

// core components
import RootPage from "views/Root/RootPage.jsx";

import "assets/css/material-dashboard-react.css";
const theme = createMuiTheme({
  palette: {
    primary: purple,
    secondary: orange
  },
  overrides: {
    MuiInput: {
      underline: {
        "&:before": {
          borderBottom: `1px solid #d6d6d6`
        },
        "&:hover": {
          borderBottom: `1px solid #d6d6d6`
        }
      }
    },
    MuiTableRow: {
      "& td": {
        borderBottom: "none"
      }
    }
  }
});
const hist = createBrowserHistory();

ReactDOM.render(
  <Provider store={configureStore()}>
    <MuiThemeProvider theme={theme}>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Router history={hist}>
          <Switch>
            <Route path="/" component={RootPage} />
            <Redirect from="/*" to="/" />
          </Switch>
        </Router>
      </MuiPickersUtilsProvider>
    </MuiThemeProvider>
  </Provider>,
  document.getElementById("root")
);
