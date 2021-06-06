import { useDispatch, useSelector } from "react-redux";

export function CustomerModal() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  return <div>
      Customer model
  </div>;
}
