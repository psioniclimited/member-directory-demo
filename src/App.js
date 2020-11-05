import { Grid } from "@material-ui/core";
import MemberForm from "./pages/MemberForm";
import "./App.css";

function App() {
  return (
    <Grid container direction="column">
      <Grid item container>
        <Grid item sm={2} />
        <Grid item xs={12} sm={8}>
          <MemberForm />
          <Grid item sm={2} />
        </Grid>
      </Grid>
    </Grid>
  );
}

export default App;
