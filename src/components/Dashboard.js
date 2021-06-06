export function Dashboard() {
  return (
    <div>
      <div>
        <h1>Welcome to ABC BANK Admin Moudel </h1>
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
      </div>
    </div>
  );
}
