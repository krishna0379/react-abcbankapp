import { combineReducers } from "redux";
import { applyMiddleware } from "redux";
import { createStore } from "redux";
import thunk from "redux-thunk";

import { AdminLoginReducer } from "./AdminLoginReducer";
import { AdminReducer } from "./AdminReducer";
import { EmployeeReducer } from "./EmployeeReducer";
import { LadReducer } from "./LadReducer";
import { UserRegisterReducer } from "./UserRegisterReducer";

const rootReducer = combineReducers({
  admin: AdminReducer,
  employee: EmployeeReducer,
  lad: LadReducer,
  UserRegister: UserRegisterReducer,
  AdminLogin: AdminLoginReducer,
});
//const store = createStore(rootReducer);
const store = createStore(rootReducer, applyMiddleware(thunk));
export { store };
