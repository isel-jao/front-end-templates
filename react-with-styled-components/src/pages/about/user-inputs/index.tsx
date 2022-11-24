import { useProvider } from "../../../components/provider";
import { Value } from "..";
const UserInputs = () => {
  const { user, dispatch } = useProvider<Value>();
  return (
    <div className="debug card p-3 grid-2 gap-3 my-6">
      <input
        type="text"
        value={user.firstName}
        onChange={(e) => {
          dispatch({
            type: "SET_FIRST_NAME",
            payload: e.target.value,
          });
        }}
      />
      <input
        type="text"
        value={user.lastName}
        onChange={(e) => {
          dispatch({
            type: "SET_LAST_NAME",
            payload: e.target.value,
          });
        }}
      />
      <input
        type="email"
        value={user.email}
        onChange={(e) => {
          dispatch({
            type: "SET_EMAIL",
            payload: e.target.value,
          });
        }}
      />
      <input
        type="password"
        value={user.password}
        onChange={(e) => {
          dispatch({
            type: "SET_PASSWORD",
            payload: e.target.value,
          });
        }}
      />
    </div>
  );
};

export default UserInputs;
