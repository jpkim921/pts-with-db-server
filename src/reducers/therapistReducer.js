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
    case "DELETING_PATIENT":
      return Object.assign({}, state, { loading: true });
    case "DELETE_PATIENT":
      console.log(action.payload);
      let patientId = action.payload;
      patients = state.therapist.patients.filter(
        patient => patient.id !== patientId
      );
      let therapist = { ...state.therapist, ...{ patients: patients } };
      return { ...state, ...therapist, patients, loading: false };

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
