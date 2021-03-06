import React from "react";
import { Navbar } from "../components/nav";
import { connect } from "react-redux";
import { fetchTherapist } from "../actions/therapistAction";
import { Link } from "react-router-dom";

import PatientsContainer from "./PatientsContainer";

class TherapistContainer extends React.Component {
  componentDidMount() {
    this.props.fetchTherapist();
  }
  render() {
    return (
      <div className="TherapistContainer-container">
        <Navbar name={this.props.therapist.name} />
        {/* <PatientsContainer /> */}
        <Link to="/patients">Patients</Link>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    therapist: state.therapist.therapist
  };
};

const mapDispatchToProps = {
  fetchTherapist
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TherapistContainer);
