import React, { createContext, useState, useContext } from "react";
import {allDeveloperProjectListAction} from '../Actions/pageAction'
import { getLoginCookies } from "../Actions/authAction";
export const ProjectPageContext = createContext();



export default function ProjectPageContextApiProvider({ children }) {
    const loginToken = getLoginCookies();
    const [projectPageList, setprojectPageList] = useState([])

    const handelDeveloperList = async()=>{
       try {
        const response = await allDeveloperProjectListAction();
        console.log(response.data.result)
        setprojectPageList(response.data.result);
       } catch (error) {
        
       }
    }

  return (
     <ProjectPageContext.Provider value={{handelDeveloperList , projectPageList}}>
        {children}
     </ProjectPageContext.Provider>
  )
}
