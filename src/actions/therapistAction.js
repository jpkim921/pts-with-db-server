export function fetchTherapist() {
  return dispatch => {
    dispatch({ type: "LOADING_THERAPISTS" });
    return (
      fetch("https://my-json-server.typicode.com/jpkim921/db/therapists/1")
        .then(response => response.json())
        // .then(therapist => console.log({ therapist }));
        // .catch(error => console.log("error is", error))
        .then(therapist =>
          dispatch({ type: "FETCH_THERAPIST", payload: therapist })
        )
    );
  };
}
