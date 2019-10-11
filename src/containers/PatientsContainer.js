import React from "react";
import { connect } from "react-redux";
import { updatePatient } from "../actions/patientsAction";
var _ = require("lodash");

import Patients from "../components/patientsComponent/Patients";

class PatientsContainer extends React.Component {
  render() {
    console.log("patientContainer", this.props.patients);
    return (
      <div className="PatientsContainer-container">
        <Patients
          patients={this.props.patients}
          updatePatient={this.props.updatePatient}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    patients: state.therapist.patients
  };
};

const mapDispatchToProps = {
  updatePatient
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PatientsContainer);
