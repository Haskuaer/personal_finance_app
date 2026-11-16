import styles from './TransactionRow.module.css'
import TransactionCell from './TransactionCell.jsx'

export default function TransactionRow() {
    return (
        <div className={styles.transactionRow}>
            <TransactionCell />
            <TransactionCell />
            <TransactionCell />
            <TransactionCell />
            <TransactionCell />
            <TransactionCell />
            <TransactionCell />
            <TransactionCell />
            <TransactionCell />
        </div>
    )
}