import React from "react";
import { Redirect } from "react-router-dom";

class Patient extends React.Component {
  state = this.props.location.state;

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  handleAddressChange = event => {
    let address = this.state.address;
    address[event.target.name] = event.target.value;
    this.setState({
      address: address
    });
  };

  editButton = event => {
    event.preventDefault();
    let fieldsets, editButton, submitButton;

    //take out disabled attribute from fieldset elements
    fieldsets = document.getElementsByTagName("fieldset");
    for (let i = 0; i < fieldsets.length; i++) {
      fieldsets[i].disabled = false;
    }

    //replace the edit with a submit button
    editButton = document.getElementById("patient-profile-edit");
    submitButton = document.getElementById("patient-profile-submit");
    editButton.setAttribute("hidden", true);
    submitButton.removeAttribute("hidden");
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.location.updatePatient(this.state.id, this.state);
    this.setState({
      redirect: true
    });
  };

  render() {
    console.log("patient", this.props.patient);

    if (this.state.redirect) {
      return <Redirect exact to="/patients" />;
    }
    return (
      <div className="container">
        <h4>Patient Profile</h4>
        <form action="" onSubmit={this.handleSubmit}>
          <div className="form-row">
            <div className="col">
              <fieldset className="form-group" disabled>
                <legend>Contact Info:</legend>
                <input
                  className="form-control"
                  placeholder="Enter Full Name"
                  onChange={this.handleChange}
                  name="name"
                  value={this.state.name}
                />
                <input
                  className="form-control"
                  type="text"
                  placeholder="Enter Email"
                  onChange={this.handleChange}
                  name="email"
                  value={this.state.email}
                />
                <input
                  className="form-control"
                  type="text"
                  placeholder="Enter Phone Number"
                  onChange={this.handleChange}
                  name="phone"
                  value={this.state.phone}
                />
              </fieldset>
            </div>
            <div className="col">
              <fieldset className="form-group" disabled>
                <legend>Address:</legend>
                <input
                  className="form-control"
                  type="text"
                  placeholder="Address 1"
                  onChange={this.handleAddressChange}
                  name="street"
                  value={this.state.street}
                />
                <input
                  className="form-control"
                  type="text"
                  placeholder="Address 2"
                  onChange={this.handleAddressChange}
                  name="suite"
                  value={this.state.suite}
                />
                <div className="form-row">
                  <div className="col-5">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="City"
                      onChange={this.handleAddressChange}
                      name="city"
                      value={this.state.city}
                    />
                  </div>
                  <div className="col">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="State"
                      onChange={this.handleAddressChange}
                      name="city"
                      value={this.state.city}
                    />
                  </div>
                  <div className="col">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Zip"
                      onChange={this.handleAddressChange}
                      name="zipcode"
                      value={this.state.zipcode}
                    />
                  </div>
                </div>
              </fieldset>
            </div>
          </div>
          <div className="form-row">
            <div className="col">
              <button
                onClick={this.editButton}
                id="patient-profile-edit"
                className="btn btn-secondary form-control"
              >
                Edit
              </button>
              <button
                id="patient-profile-submit"
                type="submit"
                className="btn btn-secondary form-control"
                hidden
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Patient;

// class Patient extends React.Component {
//   // constructor(props) {
//   //   super(props);
//   // }
//   state = {
//     name: this.props.location.state.name
//   };
//   render() {
//     console.log(this.props);
//     return (
//       <div className="patient-container">
//         <h4>Patient Component</h4>
//         <p>{this.state.name}</p>
//       </div>
//     );
//   }
// }

// export default Patient;
