import styles from './MenuOpen.module.css'
import images from '@assets/icons/index.js'
import OpenMenuButton from '@components/Buttons/OpenMenuButton/OpenMenuButton.jsx'
import SidebarButton from '@components/Buttons/SidebarButton/SidebarButton.jsx'

export default function MenuOpen() {
    return(
        <nav className={styles.openMenu}>
            <section className={styles.sidebarSection}>
                <SidebarButton />
            </section>
            <section className={styles.searchSection}>
                <img src={images.search} alt="search icon"></img>
            </section>
            <section className={styles.menuOptions}>
                <ul>
                    <li><OpenMenuButton text="Home" href="#" /></li>
                    <li><OpenMenuButton text="Transactions" href="#" /></li>
                    <li><OpenMenuButton text="Settlements" href="#" /></li>
                </ul>
            </section>
        </nav>
    )
}