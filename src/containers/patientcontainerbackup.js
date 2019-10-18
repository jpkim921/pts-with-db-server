import React from "react";
import Patients from "../components/patientsComponent/Patients";
import { connect } from "react-redux";
import { updatePatient } from "../actions/patientsAction";
import { Link } from "react-router-dom";

var _ = require("lodash");

class PatientsContainer extends React.Component {
  render() {
    const { patients } = this.props;
    return (
      <div className="PatientsContainer-container">
        <Patients patients={patients} />
        {patients.map(patient => {
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
