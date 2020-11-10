import {
  createMuiTheme,
  ThemeProvider,
} from "@material-ui/core";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import MemberForm from './pages/MemberForm';
import Members from "./pages/Members";
import Currency from './pages/Currency';
import themeObject  from "./util/theme";

const theme = createMuiTheme(themeObject);

function App() {
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
    </ThemeProvider>
  );
}

export default App;
