import {
  makeStyles,
  CssBaseline,
  createMuiTheme,
  ThemeProvider,
} from "@material-ui/core";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import MemberForm from './pages/MemberForm';
import Members from "./pages/Members";
import Currency from './pages/Currency';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#333996",
      light: "#3c44b126",
    },
    secondary: {
      main: "#f83245",
      light: "#f8324526",
    },
    background: {
      default: "#f4f5fd",
    },
  },
  overrides: {
    MuiAppBar: {
      root: {
        transform: "translateZ(0)",
      },
    },
  },
  props: {
    MuiIconButton: {
      disableRipple: true,
    },
  },
});

const useStyles = makeStyles({
  appMain: {
    paddingLeft: "320px",
    width: "100%",
  },
});

function App() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/members' exact component={Members} />
          <Route path='/new_member' component={MemberForm} />
          <Route path='/currency' component={Currency} />
        </Switch>
      </Router>
      {/* <SideMenu /> */}
      {/* <div className={classes.appMain}>
        <Members />
      </div>
      <CssBaseline /> */}
    </ThemeProvider>
  );
}

export default App;
