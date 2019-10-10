import React from "react";
import { connect } from "react-redux";
import { updatePatient } from "../actions/patientsAction";

import Patients from "../components/patientsComponent/Patients";

class PatientsContainer extends React.Component {
  render() {
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
