import React from "react";
import { connect } from "react-redux";
import { updatePatient } from "../actions/patientsAction";
import { Link } from "react-router-dom";

var _ = require("lodash");

import Patients from "../components/patientsComponent/Patients";

class PatientsContainer extends React.Component {
  renderPatients = () => {
    return this.props.patients.map(patient => {
      return (
        <div key={patient.id}>
          <Link
            to={{
              pathname: `/patients/${patient.id}`,
              state: { ...patient, redirect: false },
              updatePatient: this.props.updatePatient
            }}
          >
            {patient.name}
          </Link>
        </div>
      );
    });
  };
  render() {
    const patients = this.props.patients;
    console.log("patientContainer", patients);
    return (
      <div className="PatientsContainer-container">
        {patients.map(patient => {
          console.log(patient.name);
          return (
            <div key={patient.id}>
              <Link
                to={{
                  pathname: `/patients/${patient.id}`,
                  state: { ...patient, redirect: false },
                  updatePatient: this.props.updatePatient
                }}
              >
                {patient.name}
              </Link>
              {patient.name}
            </div>
          );
        })}
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
