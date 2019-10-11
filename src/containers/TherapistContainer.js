import React from "react";
import { Navbar } from "../components/nav";
import { connect } from "react-redux";
import { fetchTherapist } from "../actions/therapistAction";

import PatientsContainer from "./PatientsContainer";

class TherapistContainer extends React.Component {
  componentDidMount() {
    this.props.fetchTherapist();
  }
  render() {
    console.log("therapistContainer", this.props.therapist.patients);
    return (
      <div className="TherapistContainer-container">
        <Navbar name={this.props.therapist.name} />
        <PatientsContainer />
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
