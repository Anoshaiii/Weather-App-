
import React, { useReducer, useContext } from "react";

import {WeatherReducer} from './WeatherReducer';

const WeatherAPPContext = React.createContext();

const WeatherAPPProvider = ({children})=>{

    const [state, dispatch] = useReducer(WeatherReducer, {
          city: {
            "city": "Hyderabad City", 
            "lat": "25.3792", 
            "lng": "68.3683", 
            "country": "Pakistan", 
            "iso2": "PK", 
            "admin_name": "Sindh", 
            "capital": "minor", 
            "population": "1732693", 
            "population_proper": "1732693"
          },
          current:'',
          daily:''
    })

    
    //const APIKEY = ''
    return (
        <WeatherAPPContext.Provider value={{state, dispatch}} >
            {children}
        </WeatherAPPContext.Provider>
    )
}

export default WeatherAPPProvider;

export const UseWeatherAppContext = ()=>{
    return useContext(WeatherAPPContext);
}