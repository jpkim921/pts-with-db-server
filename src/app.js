import React from "react";
import TherapistContainer from "./containers/TherapistContainer";
import PatientsContainer from "./containers/PatientsContainer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Patient from "./components/patientsComponent/Patient";

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <Router>
          <Switch>
            <Route exact path="/" component={TherapistContainer} />
            <Route exact path="/patients" component={PatientsContainer} />
            <Route path="/patients/:patientId" component={Patient} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
