import React from "react";
import Patients from "../components/patientsComponent/Patients";
import { connect } from "react-redux";
import { updatePatient, deletePatient } from "../actions/patientsAction";
import { Link } from "react-router-dom";

var _ = require("lodash");

class PatientsContainer extends React.Component {
  render() {
    const { patients } = this.props;
    return (
      <div className="PatientsContainer-container">
        <Patients
          patients={patients}
          updatePatient={this.props.updatePatient}
          deletePatient={this.props.deletePatient}
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
  updatePatient,
  deletePatient
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PatientsContainer);
