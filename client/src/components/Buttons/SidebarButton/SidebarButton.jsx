import styles from './SidebarButton.module.css'

export default function SidebarButton(props) {
    return (
        <a className={styles.sidebarButton}>
            <img src={props.image} alt={props.alt}></img>
        </a>
    )
}