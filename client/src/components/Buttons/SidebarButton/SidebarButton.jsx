import { useContext } from 'react'
import styles from './SidebarButton.module.css'
import images from '@assets/icons/index.js'
import { MenuContext } from '@contexts/MenuContext.js'

export default function SidebarButton() {

    const { isMenuOpen, setIsMenuOpen } = useContext(MenuContext);

    return (
        <a className={styles.sidebarButton} onClick={() => setIsMenuOpen(prev => !prev)}>
            <img src={images.sidebar} alt="sidebar icon"></img>
        </a>
    )
}