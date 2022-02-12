import { createContext, useEffect, useState } from "react";

const Context = createContext({});

export function DataContextProvider({ children }) {
  const [alldata, setAllData] = useState({});

  const [edit, setEdit] = useState(false);

  useEffect(() => {
    const getLocalStorage = () => {
      const alldataLS = JSON.parse(localStorage.getItem("alldata")) ?? [];

      setAllData(alldataLS);
    };

    getLocalStorage();
  }, []);

  useEffect(() => {
    localStorage.setItem("alldata", JSON.stringify(alldata));
  }, [alldata]);

  return (
    <Context.Provider
      value={{
        alldata,
        setAllData,
        edit,
        setEdit,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export default Context;
