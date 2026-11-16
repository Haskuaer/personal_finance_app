import styles from './OpenMenuButton.module.css'

export default function OpenMenuButton(props) {
    return (
        <a className={styles.openMenuButton} href={props.href}>
            {props.text}
        </a>
    )
}