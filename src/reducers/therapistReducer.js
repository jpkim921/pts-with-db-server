export default function therapistReducer(
  state = { loading: false, therapist: {}, patients: [] },
  action
) {
  switch (action.type) {
    case "LOADING_THERAPIST":
      // return Object.assign({}, state, { loading: true });
      return { ...state, loading: true };
    case "FETCH_THERAPIST":
      return {
        ...state,
        therapist: action.payload,
        patients: action.payload.patients,
        loading: false
      };
    case "UPDATING_PATIENT":
      return Object.assign({}, state, { loading: true });
    case "UPDATE_PATIENT":
      console.log(action.payload);
      let updatedPatient = action.payload;
      let patients = state.patients;
      patients = findAndReplacePatient(patients, updatedPatient);
      // console.log(patients);
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
