import { createContext, useEffect, useState } from "react";


const Context = createContext({})

export function ExperienceContextProvider ({children}) {
    

    const [allexperience, setAllExperience] = useState({})

    useEffect(()=>{
         const getLocalStorage = () => {
             const experienceLS = JSON.parse(localStorage.getItem('allexperience')) ?? [];

             setAllExperience(experienceLS)
         }

         getLocalStorage()
    },[])

    useEffect(()=>{
         localStorage.setItem('allexperience', JSON.stringify(allexperience))
    },[allexperience])

    return(

    <Context.Provider value={{
        allexperience,
        setAllExperience
    }}>
        {children}
    </Context.Provider>
)}

export default Context;