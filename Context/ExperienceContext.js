import { createContext, useEffect, useState } from "react";

const Context = createContext({});

export function ExperienceContextProvider({ children }) {

  // state form experience
  const [allexperience, setAllExperience] = useState({});

  // reading changes form and set local storage
  useEffect(() => {
    const getLocalStorage = () => {
      const experienceLS =
        JSON.parse(localStorage.getItem("allexperience")) ?? [];

      setAllExperience(experienceLS);
    };

    getLocalStorage();
  }, []);

  //set data in local storage
  useEffect(() => {
    localStorage.setItem("allexperience", JSON.stringify(allexperience));
  }, [allexperience]);

  return (
    <Context.Provider
      value={{
        allexperience,
        setAllExperience,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export default Context;
