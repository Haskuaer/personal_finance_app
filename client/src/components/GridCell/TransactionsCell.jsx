import styles from './TransactionsCell.module.css'

export default function TransactionsCell(props) {
    return(
        <div className={styles.cell}>
            {props.text}
        </div>
    )
}