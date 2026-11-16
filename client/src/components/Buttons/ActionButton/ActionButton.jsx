import styles from './ActionButton.module.css'
import images from '@assets/icons/index.js'

export default function ActionButton(props) {
    return (
        <a className={styles.actionButton} href={props.href}>
            <img src={props.image} alt={props.alt}></img>
        </a>
    )
}