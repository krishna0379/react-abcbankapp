import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { deleteLoanTypeAction } from "../redux/AdminReducer";

export function LoanTypes() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const history = useHistory();
  console.log(state);

  const deletLoanType = (item, index) => {
    dispatch(deleteLoanTypeAction(item));
  };

  return (
    <>
      <div className="row">
        <div className="col-3 col-md-2 d-none d-md-block"></div>
        <div className="col-12 col-md-8">
          <h3 className="alert alert-secondary">Loan Program</h3>

          <table className="table">
            <thead className="thead-dark">
              <tr>
                <th scope="col">#ID</th>
                <th scope="col">LOANTYPE</th>
                <th scope="col">MINIMUMAGE</th>
                <th scope="col">MAXIMUMAGE</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>

            <tbody>
              {[...state.admin.list].map((item, index) => (
                <tr key={index}>
                  <th scope="row">{item.Id}</th>
                  <td>{item.loanType}</td>
                  <td>{item.minimumAge}</td>
                  <td>{item.maximumAge}</td>
                  <td>
                    <input
                      type="button"
                      value="Delete"
                      onClick={() => deletLoanType(item, index)}
                      className="btn btn-link text-danger"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="col-3 col-md-2 d-none d-md-block"></div>
      </div>
    </>
  );
}
