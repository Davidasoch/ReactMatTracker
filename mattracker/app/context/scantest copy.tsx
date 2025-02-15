'use client'
import { createContext, useState } from "react";

 export const ActionsContext = createContext(
    {
        scan: null,
        write: null,
        setActions:()=>{}
    }

)

export function ScantestContextProvider({ children }) {
    const [scan, setScan] = useState(null);
  
    return (
      <ActionsContext.Provider
        value={{
          scan: null,
          write: null,
          setActions:()=>{}
        }}
      >
        {children}
      </ActionsContext.Provider>
    );
  }