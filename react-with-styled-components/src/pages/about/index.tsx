import { useReducer } from "react";
import Provider from "../../components/provider";
import UserInputs from "./user-inputs";
interface User {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}
const defaultUserState: User = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
};

interface Action {
  type: "SET_FIRST_NAME" | "SET_LAST_NAME" | "SET_EMAIL" | "SET_PASSWORD";
  payload: string;
}
const userReducer = (state: User, action: Action) => {
  switch (action.type) {
    case "SET_FIRST_NAME":
      return {
        ...state,
        firstName: action.payload,
      };
    case "SET_LAST_NAME":
      return {
        ...state,
        lastName: action.payload,
      };
    case "SET_EMAIL":
      return {
        ...state,
        email: action.payload,
      };
    case "SET_PASSWORD":
      return {
        ...state,
        password: action.payload,
      };
    default:
      throw new Error("Invalid action type");
  }
};

interface Value {
  user: User;
  dispatch: React.Dispatch<Action>;
}

const AboutPage = () => {
  const [user, dispatch] = useReducer(userReducer, defaultUserState);
  return (
    <Provider value={{ user, dispatch }}>
      <div className=" h-50 flex flex-col justify-center align-center">
        {JSON.stringify(user)}
        <UserInputs />
      </div>
    </Provider>
  );
};

export { type Value };

export default AboutPage;
