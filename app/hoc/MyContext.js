import React, { useState, createContext } from "react";
export const MyContext = createContext();

const MyContextProvider = (props) => {
  const [num, setNum] = useState(12345);
  return (
    <MyContext.Provider value={{ num }}>{props.children}</MyContext.Provider>
  );
};
export default MyContextProvider;
