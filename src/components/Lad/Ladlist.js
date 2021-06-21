import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetAllLoanStatusAction } from "../../redux/LadReducer";

export function Ladlist() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  console.log(state);

  const [successOperation, setSuccessOperation] = useState(false);

  // Used to Initialize :: READ THE DATA FROM API
  useEffect(() => {
    dispatch(GetAllLoanStatusAction());
  }, []);

  setSuccessOperation(true);
  setTimeout(() => setSuccessOperation(false), 4000);

  return (
    <div className="bg-container cbg">
      <div className="row">
        <div className="col-3 col-md-2 d-none d-md-block"></div>
        <div className="col-12 col-md-8">
          <h3 className="alert alert-info text-center p-3 m-2">
            Customer Loan List
          </h3>

          {successOperation && (
            <div className="alert alert-success">Opeation Success</div>
          )}

          <table className="table">
            <thead className="table table-bordered table-dark">
              <tr>
                <th scope="col">CUSTOMER ID</th>
                <th scope="col">LOAN TYPE</th>
                <th scope="col">EMI</th>
                <th scope="col">LOAN AMOUNT</th>
                <th scope="col">STATUS</th>
              </tr>
            </thead>
            <tbody className="table table-bordered table-success">
              {[...state.lad.list].map((item, index) => (
                <tr key={index}>
                  <td className="item-style">{item.customerRefId}</td>
                  <td className="item-style">{item.customerLoanType}</td>
                  <td className="item-style">{item.emi}</td>
                  <td className="item-style">{item.loanAmount}</td>
                  {item.loanAmount > 1 ? (
                    <td className="loan-approved"> Approved</td>
                  ) : (
                    <td className="loan-rejected"> Rejected</td>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="col-3 col-md-2 d-none d-md-block"></div>
    </div>
  );
}
