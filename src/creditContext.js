import React, { useState, createContext, useEffect } from 'react';

export const CreditContext = createContext();

    function getInitialState() {
        const credits = localStorage.getItem('credits')
        return credits ? JSON.parse(credits) : {amount:0,perclick:1, creditsPerSec:0}
    }
  
export const CreditProvider = props => {
    const [credits, setCredits] = useState(getInitialState)
    useEffect(() => {
      localStorage.setItem('credits', JSON.stringify(credits))
    }, [credits])
    return (
        <CreditContext.Provider value={[credits, setCredits]}>
            {props.children}
        </CreditContext.Provider>
    )
}


