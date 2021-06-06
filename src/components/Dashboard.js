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
    </div>
  );
}
