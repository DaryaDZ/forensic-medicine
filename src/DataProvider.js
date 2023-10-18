import React, { useState, createContext } from "react";
export const DataContext = createContext();


const DataProvider = (props) => {
  const [calculator, setCalculator] = useState([]);
  const [diye, setDiye] = useState({
    year: "",
    gender: "",
    type: "",
    bodypartName: "",
    memberviolation: "",
    kill: "",
    fetus: "",
  });
  const year = [
    1375, 1376, 1377, 1378, 1379, 1380, 1381, 1382, 1383, 1384, 1385, 1386,
    1387, 1388, 1398, 1390, 1391, 1392, 1393, 1394, 1395, 1396, 1397, 1398,
    1399, 1400, 1401, 1402,
  ];

  const handleValueChange = (event) => {
    setDiye({ ...diye, [event.target.name]: event.target.value });
    
    
  };
  const submit = (diye) => {
    let newState = [diye, ...calculator];
    setCalculator(newState);
  };
  return (
    <DataContext.Provider
      value={{
        submit,
        handleValueChange,
        year,
        calculator,
        diye

      }}
     
    >
       {props.children}
      </DataContext.Provider>
  )
}

export default DataProvider
