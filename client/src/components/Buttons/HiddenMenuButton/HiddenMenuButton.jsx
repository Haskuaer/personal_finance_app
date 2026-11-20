import styles from './HiddenMenuButton.module.css'

export default function HiddenMenuButton(props) {

    return (
        <a className={styles.hiddenMenuButton} href={props.href}>
            <img src={props.image} alt={props.alt} />
        </a>
    )
}