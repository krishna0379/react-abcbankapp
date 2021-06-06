import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

export function Dashboard() {
  const dispatch = useDispatch();
  const history = useHistory();
  const state = useSelector((state) => state);
  console.log(state);

  return (
    <div>
      <div>
        <h1>Welcome to ABC BANK Admin Moudel </h1>
      </div>

      <div>
        <h2 className="text-center">Types of Loans</h2>
        <div className="first-part">
          <div>
            <h1>home Loan </h1>
            <p> take the loan at minimum price and enjoy the benefits</p>
            <button className="btn btn-primary">apply</button>
          </div>
          <div>
            <h1>car Loan</h1>
            <p> take the loan at minimum price and enjoy the benefits</p>
            <button className="btn btn-primary">apply</button>
          </div>
        </div>
        
        <div className="first-part">
          <div>
            <h1>BusinessLoan</h1>
            <p> take the loan at minimum price and enjoy the benefits</p>
            <button className="btn btn-primary">apply</button>
          </div>
          <div>
            <h1>Education Loan</h1>
            <p> take the loan at minimum price and enjoy the benefits</p>
            <button className="btn btn-primary">apply</button>
          </div>
        </div>
      </div>
    </div>
  );
}
