import styles from './MenuHidden.module.css'
import images from '@assets/icons/index.js';
import HiddenMenuButton from '@components/Buttons/HiddenMenuButton/HiddenMenuButton.jsx'
import SidebarButton from '@components/Buttons/SidebarButton/SidebarButton.jsx'

export default function MenuHidden() {

    return (
        <nav className={styles.hiddenMenu}>
            <ul>
                <li><SidebarButton image={images.sidebar} /></li>
                <li><HiddenMenuButton image={images.home} /></li>
                <li><HiddenMenuButton image={images.transaction} /></li>
                <li><HiddenMenuButton image={images.settlements} /></li>
            </ul>
        </nav>
    )
}