const styles = theme => ({
  root: {
    flexGrow: -1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30
  },
  grid: {
    width: 900,
    flexWrap: "wrap-reverse",
    //justifyContent: "flex-start",
    //border: "2px solid blue",
    alignItems: "flex-end",
    [theme.breakpoints.down("sm")]: {
      width: "calc(100% - 50px)",
      padding: "0px",
      margin: "0px"
    },
    [theme.breakpoints.down("md")]: {
      width: "calc(100% - 50px)",
      padding: "0px"
    },
    [theme.breakpoints.down("xs")]: {
      width: "calc(100% - 10px)"
    }
  },
  paper: {
    flexGrow: 1,
    padding: theme.spacing.unit * 2,
    textAlign: "right",
    minWidth: "350px",
    //border: "2px solid pink",
    borderTop: "5px solid #4C046B",
    color: theme.palette.text.primary,
    [theme.breakpoints.down('xs')]: {
      borderTop: "4px solid purple",
      borderRadius: '0px',
      border: '0',
      width: '100%',
      padding: "5px",
      margin: "auto, auto",
      backgroundColor: '#FAFAFA',
      boxShadow: '0 0 0, 0 0 0'
    }
  },
  block: {
    padding: 25,
    width: "calc(100% - 150px)",
    marginTop: "50px",
    position: "relative",
    //border: "2px solid orange",
    justifyContent: "flex-start",
    top: -72,
    //right: 5,
    fontSize: ".8rem",
    [theme.breakpoints.down("xs")]: {
      width: "calc(100% - 20px)",
      top: -12,
      right: 5
    },
    [theme.breakpoints.down("md")]: {
      width: "calc(100% - 50px)",
      top: -43
    }
  },
  card: {
    padding: 10,
    //marginTop: "66px",
    position: "relative",
    //border: "2px solid green",
    top: -42,
    right: -160,
    fontSize: "1rem",
    [theme.breakpoints.down("sm")]: {
      right: -120
    },
    [theme.breakpoints.down("xs")]: {
      top: -72,
      border: '0',
      width: '100%',
      padding: "5px",
      left: 0,
      margin: "auto, auto",
      backgroundColor: '#FAFAFA',
      boxShadow: '0 0 0, 0 0 0'
    },
    [theme.breakpoints.down("md")]: {
      top: -42,
      right: -140
    }
  },
  bigAvatar: {
    display: "none",
    top: 25,
    right: 19,
    [theme.breakpoints.down("sm")]: {
      display: "inline-block",
      width: 25,
      height: 25,
      top: -10,
      right: 50
    }
  },
  suggestionsContainerOpen: {
    position: "absolute",
    zIndex: 1,
    marginTop: theme.spacing.unit,
    left: 0,
    right: 0
  },
  suggestion: {
    display: "block"
  },
  suggestionsList: {
    margin: 0,
    padding: 0,
    listStyleType: "none"
  },
  welcome: {
    position: "relative",
    right: -814,
    [theme.breakpoints.down("md")]: {
      right: -670
    },
    [theme.breakpoints.down("sm")]: {
      right: -68
    },
    [theme.breakpoints.down("xs")]: {
      right: -68
    }
  }
});

export default styles;
