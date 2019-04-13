import {
  successColor,
  whiteColor,
  grayColor,
  hexToRgb,
  themeDarkOne
} from "assets/jss/material-dashboard-react.jsx";

// const styles = theme => ({
//   card: {
//     display: 'flex',
//     backgroundImage: 'linear-gradient(45deg, #005C97, #2F80ED)',
//     color: 'white',
//   },

//   cover: {
//     width: 151,
//     backgroundPosition: '17% 10%',
//   },
//   controls: {
//     display: 'flex',
//     alignItems: 'center',
//     paddingLeft: theme.spacing.unit,
//     paddingBottom: theme.spacing.unit,
//   },
//   playIcon: {
//     height: 38,
//     width: 38,
//   },

// });
const dashboardStyle = {
  successText: {
    color: successColor[0]
  },
  upArrowCardCategory: {
    width: "16px",
    height: "16px"
  },
  stats: {
    color: grayColor[0],
    display: "inline-flex",
    fontSize: "12px",
    lineHeight: "22px",
    "& svg": {
      top: "4px",
      width: "16px",
      height: "16px",
      position: "relative",
      marginRight: "3px",
      marginLeft: "3px"
    },
    "& .fab,& .fas,& .far,& .fal,& .material-icons": {
      top: "4px",
      fontSize: "16px",
      position: "relative",
      marginRight: "3px",
      marginLeft: "3px"
    }
  },
  cardCategory: {
    color: grayColor[0],
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    paddingTop: "10px",
    marginBottom: "0"
  },
  cardCategoryWhite: {
    color: "rgba(" + hexToRgb(whiteColor) + ",.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0"
  },
  cardTitle: {
    color: themeDarkOne.primaryColor[0],
    fontSize: "0.875rem",
    fontWeight: "600",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: grayColor[1],
      fontWeight: "400",
      lineHeight: "1"
    }
  },
  cardTitleWhite: {
    color: whiteColor,
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: grayColor[1],
      fontWeight: "400",
      lineHeight: "1"
    }
  },
  details: {
    display: "flex",
    flexDirection: "column"
  },
  content: {
    flex: "1 0 auto",
    marginBottom: "0",
    paddingBottom: "0"
  },
  boldText: {
    fontWeight: 600,
    fontSize: "1.2rem"
  },
  dataColumns: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  },
  middleRow: {
    marginTop: "0.5rem"
  },
  middleRowDetails: {
    fontSize: "0.65rem"
  },
  progress: {
    margin: "1rem",
    color: "#ffffff"
  },
  button: {
    margin: "0px",
    backgroundImage: "linear-gradient(90deg, #15988d, #0f9e45)",
    backgroundColor: "none !important"
  }
};

export default dashboardStyle;
