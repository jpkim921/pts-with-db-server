import React from "react";

class Patient extends React.Component {
  constructor(props) {
    super(props);
    this.state = props.location.state;
  }

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
  };

  render() {
    return (
      <div className="container">
        <h4>Patient Profile</h4>
        <form action="" onClick={this.handleSubmit}>
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
                  value={this.state.address.street}
                />
                <input
                  className="form-control"
                  type="text"
                  placeholder="Address 2"
                  onChange={this.handleAddressChange}
                  name="suite"
                  value={this.state.address.suite}
                />
                <div className="form-row">
                  <div className="col-5">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="City"
                      onChange={this.handleAddressChange}
                      name="city"
                      value={this.state.address.city}
                    />
                  </div>
                  <div className="col">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="State"
                      onChange={this.handleAddressChange}
                      name="city"
                      value={this.state.address.city}
                    />
                  </div>
                  <div className="col">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Zip"
                      onChange={this.handleAddressChange}
                      name="zipcode"
                      value={this.state.address.zipcode}
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

// const fieldsets = document.getElementsByTagName('fieldset')
// for(i = 0; i < fieldsets.length; i++) {fieldsets[i].removeAttribute("disabled")}

{
  /*<form action="">
<div className="row">
  <div className="col">
    <fieldset className="form-group">
      <legend>Contact Info:</legend>
      <input
        className="form-control"
        placeholder="Enter Full Name"
        value={`${props.patient.name}`}
      />
      <input
        className="form-control"
        type="text"
        placeholder="Enter Email"
        value={`${props.patient.email}`}
      />
      <input
        className="form-control"
        type="text"
        placeholder="Enter Phone Number"
        value={`${props.patient.phone}`}
      />
    </fieldset>
  </div>
  <div className="col">
    <fieldset className="form-group">
      <legend>Address:</legend>
      <input
        className="form-control"
        type="text"
        placeholder="Address 1"
        value={`${props.patient.street}`}
      />
      <input
        className="form-control"
        type="text"
        placeholder="Address 2"
        value={`${props.patient.apt}`}
      />
      <div class="form-row">
        <div class="col-7">
          <input
            type="text"
            class="form-control"
            placeholder="City"
            value={`${props.patient.city}`}
          />
        </div>
        <div class="col">
          <input
            type="text"
            class="form-control"
            placeholder="State"
            value={`${props.patient.state}`}
          />
        </div>
        <div class="col">
          <input
            type="text"
            class="form-control"
            placeholder="Zip"
            value={`${props.patient.zipcode}`}
          />
        </div>
      </div>
    </fieldset>
  </div>
</div>
</form>*/
}
