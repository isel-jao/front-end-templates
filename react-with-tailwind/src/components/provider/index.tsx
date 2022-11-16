import React from "react";

const Context = React.createContext(null);

export const useProvider: () => any = () => {
  return React.useContext(Context);
};
interface Props {
  value: any;
  children?: React.ReactNode;
}
const Provider = ({ value, children }: Props) => {
  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export default Provider;
