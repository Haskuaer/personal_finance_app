import styles from './TransactionCell.module.css'

export default function TransactionCell(props) {
    return (
        <div id={props.id} className={styles.transactionCell}>
            {props.text}
        </div>
    )
}