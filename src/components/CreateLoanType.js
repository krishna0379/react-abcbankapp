import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  createLoanTypeAction,
  updateLoanTypeAction,
} from "../redux/AdminReducer";

export function CreateLoanType() {
  const dispatch = useDispatch();
  const history = useHistory();
  const state = useSelector((state) => state);
  console.log(state);

  const [successOperation, setSuccessOperation] = useState(false);
  const [errorOperation, setErrorOperation] = useState(false);

  const [loanType, setLoanType] = useState(state.admin.loanType);
  const [minimumAge, setMinimumAge] = useState(state.admin.minimumAge);
  const [maximumAge, setMaximumAge] = useState(state.admin.maximumAge);

  const updateLoanType = (e) => setLoanType(e.target.value);
  const updateMinimumAge = (e) => setMinimumAge(e.target.value);
  const updateMaximumAge = (e) => setMaximumAge(e.target.value);

  const addLoanProgram = (e) => {
    e.preventDefault();
    console.log(loanType, minimumAge, maximumAge);
    //this will call the redux action..>>
    dispatch(
      createLoanTypeAction({
        loanType,
        minimumAge,
        maximumAge,
      })
    );

    // A1 sucess
    setSuccessOperation(true);
    setTimeout(() => setSuccessOperation(false), 4000);

    //reset the from after fillinfg the from..
    setLoanType("");
    setMinimumAge("");
    setMaximumAge("");
  };

  const updateLoanProgram = () => {
    dispatch(
      updateLoanTypeAction({
        id: state.admin.refloan.id,
        loanType,
        minimumAge,
        maximumAge,
      })
    );

    //we have to rest the from after date get updated..
    setLoanType("");
    setMinimumAge("");
    setMaximumAge("");
  };
  return (
    <div>
      <div className="row">
        <div className="col-3 col-md-3 d-none d-md-block"></div>
        <div className="col-12 col-md-6">
          <h3 className="alert alert-secondary">
            {state.admin.refloan.id
              ? "Update LoanProgram"
              : "Create LoanProgram"}
          </h3>

          {/** BELOW THESE TWO TAGS MUST BE CONDITIOANL */}
          {successOperation && (
            <div className="alert alert-success">Opeation Success</div>
          )}

          <div className="mb-1">
            <input
              type="text"
              value={loanType}
              onChange={(e) => updateLoanType(e)}
              className="form-control"
              placeholder="Enter Loan Type"
            />
          </div>
          <div className="mb-1">
            <input
              type="text"
              value={minimumAge}
              onChange={(e) => updateMinimumAge(e)}
              className="form-control"
              placeholder="Enter Minimum Age"
            />
          </div>
          <div className="mb-1">
            <input
              type="text"
              value={maximumAge}
              onChange={(e) => updateMaximumAge(e)}
              className="form-control"
              placeholder="Enter Maximum Age"
            />
          </div>

          <div className="mb-1">
            {state.admin.refloan.id ? (
              <input
                type="button"
                className="btn btn-success w-100"
                value="Update Loan Program Data"
                onClick={(e) => updateLoanProgram(e)}
              />
            ) : (
              <input
                type="button"
                className="btn btn-success w-100"
                value="Add Loan Program Data"
                onClick={(e) => addLoanProgram(e)}
              />
            )}
          </div>
        </div>
      </div>
      <div className="col-3 col-md-3  d-none d-md-block"></div>
    </div>
  );
}
