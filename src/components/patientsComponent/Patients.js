import React from "react";
import { Link } from "react-router-dom";

class Patients extends React.Component {
  // renderPatients = () => {
  //   return this.props.patients.map(patient => {
  //     return (
  //       <div key={patient.id}>
  //         <Link
  //           to={{
  //             pathname: `/patients/${patient.id}`,
  //             state: { ...patient, redirect: false },
  //             updatePatient: this.props.updatePatient
  //           }}
  //         >
  //           {patient.name}
  //         </Link>
  //       </div>
  //     );
  //   });
  // };

  render() {
    const renderPatients = () => {
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
    console.log("patients", this.props.patients);
    return (
      <div>
        <h4>Patient List</h4>
        {renderPatients()}
      </div>
    );
  }
}

export default Patients;
