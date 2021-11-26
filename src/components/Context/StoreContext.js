import React, { createContext, useReducer } from 'react'
import Reducer from './Reducer';


export const DataProvider = createContext();

const StoreContext = ({children}) => {
    const [state,dispatch] = useReducer(Reducer,[
        {id:1,name:"saimun",email:"saimun@gamil.com",roll:120,address:"barisal"}
    ])
    return (
        <div>
            <DataProvider.Provider value={{state,dispatch}}>
                {children}
            </DataProvider.Provider>
            
        </div>
    )
}

export default StoreContext
