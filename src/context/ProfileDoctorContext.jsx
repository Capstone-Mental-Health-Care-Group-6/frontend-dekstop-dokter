import React, { createContext, useState } from 'react';

const MyContext = createContext();

const MyContextProvider = ({ children }) => {
    const [dataDoctor, setDataDoctor] = useState({});

    return (
        <MyContext.Provider value={{ dataDoctor, setDataDoctor }}>
            {children}
        </MyContext.Provider>
    );
};

export { MyContext, MyContextProvider };
