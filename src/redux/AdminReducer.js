const initState = {
  list: [],
  refloan: {},
  error: false,
};
// admin actions..>>
const LOAN_TYPE_CREATE = "LOAN_TYPE_CREATE";
const LOAN_TYPE_UPDATE = "LOAN_TYPE_UPDATE";
const LOAN_TYPE_DELETE = "LOAN_TYPE_DELETE";
const LOAN_TYPE_GET_ALL = "LOAN_TYPE_GET_ALL";
const LOAN_GET_BY_ID = "LOAN_GET_BY_ID";

const SERVER_ERROR = "SERVER_ERROR";

const REF_LOAN = "REF_LOAN";

//ACTIONS..>>
export function createLoanTypeAction(payload) {
  //return { type: LOAN_TYPE_CREATE, payload: payload };

  return async (dispatch) => {
    // WE HV TO CALL THE SPRINT1 / SPRING BOOT
    const url = " http://localhost:8090/api/admin/addloandetails/ ";
    const requestBody = { ...payload };

    // HTTP Client
    await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(requestBody),
    });

    // UPDATE THE UI
    dispatch({ type: LOAN_TYPE_CREATE, payload: payload });
  };
}

export function updateLoanTypeAction(payload) {
  //return { type: LOAN_TYPE_UPDATE, payload: payload };

  return async (dispatch) => {
    // WE HV TO CALL THE SPRINT1 / SPRING BOOT
    const url = `http://localhost:8090/api/admin/${payload.loanId}`;
    const requestBody = { ...payload };

    await fetch(url, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(requestBody),
    });

    // update the ui.
    dispatch(updateRefLoan({}));
  };
}

export function deleteLoanTypeAction(payload) {
  //return { type: LOAN_TYPE_DELETE, payload: payload };

  // redux thunk
  return async (dispatch) => {
    const url = `http://localhost:8090/api/admin/${payload.loanId}`;
    await fetch(url, { method: "DELETE" });

    // update the ui.
    dispatch(getAllLoanTypeAction());
  };
}

export function getAllLoanTypeAction(payload) {
  // return { type: LOAN_TYPE_GET_ALL, payload: payload };
  // API CALL/BACKEND CALL / REDUX-THUNK IS THERE
  return async (dispatch) => {
    try {
      // it will help us to call the  backend / SPRING BOOT
      const url = "http://localhost:8090/api/admin/";

      // HTTP Client / POSTMAN / SWAGGER
      const response = await fetch(url);
      const loanTypeList = await response.json();
      console.log(loanTypeList);

      //we are geting the data server
      localStorage.setItem("loanTypeList", JSON.stringify(loanTypeList));

      // Update the UI
      dispatch({ type: LOAN_TYPE_GET_ALL, payload: loanTypeList });
    } catch (error) {
      console.log(error);
      dispatch({ type: SERVER_ERROR, payload: true });

      const localLoanStringList = localStorage.getItem("loanTypeList");
      const localLoanTypeList = JSON.parse(localLoanStringList);
      dispatch({ type: LOAN_TYPE_GET_ALL, payload: localLoanTypeList });
    }
  };
}

export function getByIdLoanTypeAction(payload) {
  //return { type: LOAN_GET_BY_ID, payload: payload };
  return async (dispatch) => {
    const url = `http://localhost:8090/api/admin/${payload.loanId}`;
    const response = await fetch(url);
    const loanObj = await response.json();

    // this wil update the refemp
    dispatch(updateRefLoan(loanObj));
  };
}

export function updateRefLoan(payload) {
  return { type: REF_LOAN, payload: payload };
}

//reducer logic..>>
export function AdminReducer(state = initState, action) {
  switch (action.type) {
    case LOAN_TYPE_CREATE:
      return { ...state, list: [action.payload, ...state.list] };

    case LOAN_TYPE_UPDATE:
      //todo
      return state;

    case LOAN_TYPE_DELETE:
      const oldList = state.list;
      oldList.splice(action.payload, 1);
      console.log("OL", oldList);

      return { ...state, list: [...oldList] };

    case LOAN_TYPE_GET_ALL:
      //updated list..>>
      return { ...state, list: action.payload };

    case LOAN_GET_BY_ID:
      //todo
      return state;

    case REF_LOAN:
      return { ...state, refloan: action.payload };

    case SERVER_ERROR:
      return { ...state, error: action.payload };

    default:
      return state;
  }
}
