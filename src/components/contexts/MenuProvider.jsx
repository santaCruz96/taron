import { createContext, useContext, useState } from 'react';

const MenuContext = createContext()

export const useMenu = () => useContext(MenuContext)

export const MenuProvider = ({ children }) => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => setMenuOpen(prevState => !prevState)

    return (
    <MenuContext.Provider value={{ menuOpen, toggleMenu }}>
        {children}
    </MenuContext.Provider>
    )
}