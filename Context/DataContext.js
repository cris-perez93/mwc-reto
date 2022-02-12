import { createContext, useEffect, useState } from "react";

const Context = createContext({});

export function DataContextProvider({ children }) {

  //state  formdata
  const [alldata, setAllData] = useState({});

  //boolean  for edit buttondata
  const [edit, setEdit] = useState(false);

  // useeffect for changes in forms / and set local
  useEffect(() => {
    const getLocalStorage = () => {
      const alldataLS = JSON.parse(localStorage.getItem("alldata")) ?? [];

      setAllData(alldataLS);
    };

    getLocalStorage();
  }, []);


// set data local storage
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
