// MenuContext.js
import React, { createContext, useState, useContext } from 'react';

const MenuContext = createContext();

export const useMenu = () => useContext(MenuContext);

export const MenuProvider = ({ children }) => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
        console.log(menuOpen)
    };

    return (
        <MenuContext.Provider value={{ menuOpen, toggleMenu }}>
            {children}
        </MenuContext.Provider>
    );
};
