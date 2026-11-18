import styles from './TransactionRow.module.css'
import TransactionCell from './TransactionCell.jsx'

export default function TransactionRow(props) {
    return (
        <div className={styles.transactionRow}>
            <TransactionCell text={props.date} />
            <TransactionCell text={props.subject} />
            <TransactionCell text={props.amount} />
            <TransactionCell text={props.category} />
            <TransactionCell text={props.subcategory} />
            <TransactionCell text={props.share} />
            <TransactionCell text={props.sharePercent} />
            <TransactionCell text={props.debt} />
            <TransactionCell text={props.save} />
        </div>
    )
}