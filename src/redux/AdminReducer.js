const initState = {
  admin: {},
  list: [],

  refloan: {},

  sampleList: ["HomeLoan", "CarLoan", "BussinessLoan", "PersonalLoan"],
};
// admin actions..>>
const LOAN_TYPE_CREATE = "LOAN_TYPE_CREATE";
const LOAN_TYPE_UPDATE = "LOAN_TYPE_UPDATE";
const LOAN_TYPE_DELETE = "LOAN_TYPE_DELETE";
const LOAN_TYPE_GET_ALL = "LOAN_TYPE_GET_ALL";
const LOAN_GET_BY_ID = "LOAN_GET_BY_ID";

const REF_LOAN = "REF_LOAN";

//ACTIONS..>>
export function createLoanTypeAction(payload) {
  return { type: LOAN_TYPE_CREATE, payload: payload };
}

export function updateLoanTypeAction(payload) {
  return { type: LOAN_TYPE_UPDATE, payload: payload };
}

export function deleteLoanTypeAction(payload) {
  return { type: LOAN_TYPE_DELETE, payload: payload };
}

export function getAllLoanTypeAction(payload) {
  return { type: LOAN_TYPE_GET_ALL, payload: payload };
}

export function getByIdLoanTypeAction(payload) {
  return { type: LOAN_GET_BY_ID, payload: payload };
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
      //todo
      return state;

    case LOAN_GET_BY_ID:
      //todo
      return state;

    case REF_LOAN:
      return { ...state, refloan: action.payload };

    default:
      return state;
  }
}
