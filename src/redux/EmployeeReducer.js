const initState = {
  employee: {},
  list: [],
  refemp: {},
  sampleList: ["Delhi", "Kolkata", "Chennai", "Mumbai"],
};

// ACTION TYPES
const EMPLOYEE_CREATE = "EMPLOYEE_CREATE";
const EMPLOYEE_UPDATE = "EMPLOYEE_UPDATE";
const EMPLOYEE_DELETE = "EMPLOYEE_DELETE";
const EMPLOYEE_GET_ALL = "EMPLOYEE_GET_ALL";
const EMPLOYEE_GET_BY_ID = "EMPLOYEE_GET_BY_ID";

const REF_EMPLOYEE = "REF_EMPLOYEE";

// ACTIONS ::

export function createEmployeeAction(payload) {
  //return { type: EMPLOYEE_CREATE, payload: payload };

  return async (dispatch) => {
    // WE HV TO CALL THE SPRINT1 / SPRING BOOT
    const url = "http://localhost:8090/api/customerloanrequest/addloandetails";
    const requestBody = { ...payload };

    // HTTP Client
    await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(requestBody),
    });

    // UPDATE THE UI
    dispatch({ type: EMPLOYEE_CREATE, payload: payload });
  };
}

export function updateEmployeeAction(payload) {
  return { type: EMPLOYEE_UPDATE, payload: payload };
}

export function deleteEmployeeAction(payload) {
  //return { type: EMPLOYEE_DELETE, payload: payload };

  //redux thunk

  return async (dispatch) => {
    const url = `http://localhost:8090/api/customerloanrequest/delete/${payload.id}`;
    await fetch(url, { method: "DELETE" });

    // update the ui.
    dispatch(getAllEmployeeAction());
  };
}

export function getAllEmployeeAction(payload) {
  //return { type: EMPLOYEE_GET_ALL, payload: payload };

  // API CALL/BACKEND CALL / REDUX-THUNK IS THERE
  return async (dispatch) => {
    // WE HV TO CALL THE SPRINT1 / SPRING BOOT
    const url =
      "http://localhost:8090/api/customerloanrequest/allcustomerrecords";

    // HTTP Client / POSTMAN / SWAGGER
    const response = await fetch(url);
    const employeeList = await response.json();
    console.log(employeeList);

    // Update the UI
    dispatch({ type: EMPLOYEE_GET_ALL, payload: employeeList });
  };
}

export function getByIdEmployeeAction(payload) {
  return { type: EMPLOYEE_GET_BY_ID, payload: payload };
}

export function updateRefEmployee(payload) {
  return { type: REF_EMPLOYEE, payload: payload };
}

// REDUCER LOGIC
export function EmployeeReducer(state = initState, action) {
  switch (action.type) {
    case EMPLOYEE_CREATE:
      // TODO
      return { ...state, list: [action.payload, ...state.list] };
    case EMPLOYEE_UPDATE:
      // TODO
      return state;
    case EMPLOYEE_DELETE:
      // TODO
      const oldList = state.list;
      oldList.splice(action.payload, 1);
      console.log("OL", oldList);

      return { ...state, list: [...oldList] };
    case EMPLOYEE_GET_ALL:
      // TODO
      return { ...state, list: action.payload };
    case EMPLOYEE_GET_BY_ID:
      // TODO
      return state;
    case REF_EMPLOYEE:
      return { ...state, refemp: action.payload };

    default:
      return state;
  }
}