import styles from './SidebarButton.module.css'
import images from '@assets/icons/index.js'

export default function SidebarButton() {

    return (
        <a className={styles.sidebarButton}>
            <img src={images.sidebar} alt="sidebar icon"></img>
        </a>
    )
}