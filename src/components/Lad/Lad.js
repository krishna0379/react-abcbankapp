import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  GetAllCustomerAction,
  GetByIdCustomerAction,
} from "../../redux/LadReducer";

export function Lad() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  console.log(state);

  const [successOperation, setSuccessOperation] = useState(false);

  // Used to Initialize :: READ THE DATA FROM API
  useEffect(() => {
    dispatch(GetAllCustomerAction());
  }, []);

  const GetCustomerLoanRequestById = (item) => {
    dispatch(GetByIdCustomerAction(item));

    setSuccessOperation(true);
    setTimeout(() => setSuccessOperation(false), 5000);
  };

  return (
    <div className="row bg-container cbg">
      <div className="col-3 col-md-2 d-none d-md-block"></div>
      <div className="col-12 col-md-8">
        <div className="d-flex m-2">
          <h1 className="alert alert-info text-center p-3 m-2">
            Customer Loan Request Detailes
          </h1>
          <img
            src="https://www.pngkey.com/png/detail/334-3346704_request-form-icon.png"
            alt="image not found"
            style={{ height: "60px", width: "60px", margin: "2px" }}
          />
        </div>

        {successOperation && (
          <div className="alert alert-primary">
            check status in loanlist page
          </div>
        )}

        <table className="table">
          <thead className="table table-bordered table-dark">
            <tr>
              <th scope="col">#CUSTOMER ID</th>
              <th scope="col">AGE</th>
              <th scope="col">ANNUAL INCOME</th>
              <th scope="col">LOAN TYPE</th>
              <th scope="col">PAN NUMBER</th>
              <th scope="col">ACTION</th>
            </tr>
          </thead>
          <tbody className="table table-bordered table-success">
            {[...state.lad.list].map((item, index) => (
              <tr key={index}>
                <th scope="row">{item.id}</th>
                <td className="item-style">{item.age}</td>
                <td className="item-style">{item.annualIncome}</td>
                <td className="item-style">{item.loanType}</td>
                <td className="item-style">{item.panNumber}</td>

                <td>
                  <input
                    type="button"
                    onClick={() => GetCustomerLoanRequestById(item)}
                    value="Verify"
                    className="btn btn-primary m-2"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="col-3 col-md-2 d-none d-md-block"></div>
    </div>
  );
}
