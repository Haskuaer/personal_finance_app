    import { useState, createContext } from 'react'
    import MenuHidden from '@components/Menu/Hidden/MenuHidden.jsx';
    import MenuOpen from '@components/Menu/Open/MenuOpen.jsx'
    import { MenuContext } from '@contexts/MenuContext.js'
    
    export default function Home() {

        const [isMenuOpen, setIsMenuOpen] = useState(false)

        const openMenu = (isMenuOpen) => {
            return isMenuOpen ? <MenuOpen /> : <MenuHidden />;
        }

        return (
            <div className="container">
                <MenuContext.Provider value={{ isMenuOpen, setIsMenuOpen }}>
                    {openMenu(isMenuOpen)}
                </MenuContext.Provider>
                <div className="main-section">
                    <h1>Hello</h1>
                </div>
            </div>
        )
    }