import { combineReducers } from "redux";
import patientsReducer from "./patientsReducer";
import therapistReducer from "./therapistReducer";

const rootReducer = combineReducers({
  therapist: therapistReducer
});

export default rootReducer;
