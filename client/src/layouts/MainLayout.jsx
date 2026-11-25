import { useState } from 'react'
import { Outlet } from 'react-router-dom'

import { MenuContext } from '@contexts/MenuContext.js'
import Menu from '@components/Menu/Menu.jsx'

export default function MainLayout() {

    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <div className="container">
            <MenuContext.Provider value={{ isMenuOpen, setIsMenuOpen }}>
                <Menu />
            </MenuContext.Provider>

            <main className="main-section">
                <Outlet />
            </main>
        </div>
    )
}