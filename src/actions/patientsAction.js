// https://jsonplaceholder.typicode.com/users

export function fetchPatients() {
  return dispatch => {
    dispatch({ type: "LOADING_PATIENTS" });
    return fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(patients =>
        dispatch({ type: "FETCH_PATIENTS", payload: patients })
      );
  };
}

export function fetchPatient(id) {
  return dispatch => {
    dispatch({ type: "LOADING_PATIENT" });
    // return fetch("https://jsonplaceholder.typicode.com/users")
    return (
      fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(response => response.json())
        // .then(patient => console.log(patient));
        .then(patient => dispatch({ type: "FETCH_PATIENT", payload: patient }))
    );
  };
}

export function updatePatient(id, patientInfo) {
  return dispatch => {
    dispatch({ type: "UPDATING_PATIENT" });
    return (
      fetch(`https://my-json-server.typicode.com/jpkim921/db/patients/${id}`, {
        // return fetch('/therapists', {
        method: "PUT",
        body: JSON.stringify({ patientInfo }),
        headers: {
          "Content-Type": "application/json"
        }
      })
        .then(response => response.json())
        // .then(patient => console.log(patient));
        .then(patient => dispatch(updatePatientAction(patient)))
    );
  };
}

const updatePatientAction = ({ patientInfo }) => {
  return {
    type: "UPDATE_PATIENT",
    payload: patientInfo
  };
};
