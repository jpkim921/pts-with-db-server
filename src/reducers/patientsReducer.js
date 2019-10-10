export default function patientsReducer(
  state = { loading: false, patients: [] },
  action
) {
  switch (action.type) {
    case "LOADING_PATIENTS":
      return Object.assign({}, state, { loading: true });
    case "FETCH_PATIENTS":
      return Object.assign(
        {},
        state,
        { loading: false },
        { patients: action.payload }
      );
    case "LOADING_PATIENTS":
      return Object.assign({}, state, { loading: true });
    case "FETCH_PATIENT":
      return Object.assign(
        {},
        state,
        { loading: false },
        { patient: action.payload }
      );
    case "UPDATING_PATIENT":
      return Object.assign({}, state, { loading: true });
    case "UPDATE_PATIENT":
      // console.log(action.payload);
      let updatedPatient = action.payload;
      let patients = state.patients;
      patients = findAndReplacePatient(patients, updatedPatient);
      return Object.assign(
        {},
        state,
        { loading: false },
        { patients: patients }
      );
    default:
      return state;
  }
}

const findAndReplacePatient = (patients, updatedPatient) => {
  for (let i = 0; i < patients.length; i++) {
    if (updatedPatient.id === patients[i].id) {
      patients[i] = updatedPatient;
    } else {
      continue;
    }
  }
  return patients;
};
