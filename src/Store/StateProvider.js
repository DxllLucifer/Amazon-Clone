import { useContext, useReducer } from "react";
import StateContext from './StateContext'



export const StateProvider = ({reducer,initialState,children})=>(
    <StateContext.Provider value={useReducer(reducer,initialState)}>
        {children}
    </StateContext.Provider>
);

export const UseStateValue = () => useContext(StateContext)