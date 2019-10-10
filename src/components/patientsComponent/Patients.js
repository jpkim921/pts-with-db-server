import React from "react";
import { Link } from "react-router-dom";

class Patients extends React.Component {
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
    return (
      <div>
        <h4>Patient List</h4>
        {this.renderPatients()}
      </div>
    );
  }
}

export default Patients;
