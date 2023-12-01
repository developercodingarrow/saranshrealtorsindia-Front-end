import React, { createContext, useState, useContext } from "react";
import {allDeveloperProjectListAction , createDeveloperPageAction} from '../Actions/pageAction'
import { getLoginCookies } from "../Actions/authAction";
export const ProjectPageContext = createContext();



export default function ProjectPageContextApiProvider({ children }) {
    const loginToken = getLoginCookies();
    const [projectPageList, setprojectPageList] = useState([])
   const [sending, setsending] = useState(false)


   //  Handel get Developer List
    const handelDeveloperList = async()=>{
       try {
        const response = await allDeveloperProjectListAction();
        console.log(response.data.result)
        setprojectPageList(response.data.result);
       } catch (error) {
        
       }
    }

   //Handel create new Developer project page
   const handelCreateDeveloperProject = async(data)=>{
        try {
         const response = await createDeveloperPageAction(data, loginToken );
         return response
        } catch (error) {
         console.log(error)
        }
   }  

  return (
     <ProjectPageContext.Provider value={{handelDeveloperList , handelCreateDeveloperProject, projectPageList , setsending}}>
        {children}
     </ProjectPageContext.Provider>
  )
}


