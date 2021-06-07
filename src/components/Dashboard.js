import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

export function Dashboard() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const history = useHistory();
  console.log(state);

  return (
    <div>
      <div>
        <h1 className="text-center text-success ">
          Welcome to ABC BANK Admin Moudle{" "}
        </h1>
      </div>

      <div>
        <h2 className="text-center bg-primary p-3 mt-3">Types of Loans</h2>
        <div className="first-part">
          <div>
            <h1>Home Loan </h1>
            <p> take the loan at minimum price and enjoy the benefits</p>
            <button className="btn btn-primary">Details</button>
          </div>
          <div>
            <h1>Car Loan</h1>
            <p> take the loan at minimum price and enjoy the benefits</p>
            <button className="btn btn-primary">Details</button>
          </div>
        </div>

        <div className="first-part">
          <div>
            <h1>BusinessLoan</h1>
            <p> take the loan at minimum price and enjoy the benefits</p>
            <button className="btn btn-primary">Details</button>
          </div>
          <div>
            <h1>Education Loan</h1>
            <p> take the loan at minimum price and enjoy the benefits</p>
            <button className="btn btn-primary">Details</button>
          </div>
        </div>

        <div>
          <div className="p-2 m-5">
            <h1>Personal Loan</h1>
            <p> take the loan at minimum price and enjoy the benefits</p>
            <button className="btn btn-primary">Details</button>
          </div>
        </div>
      </div>
    </div>
  );
}
