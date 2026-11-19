import TransactionCell from '../TransactionCell/TransactionCell.jsx'
import styles from './TransactionHeader.module.css'

export default function TransactionHeader() {
    return(
        <div className={styles.transactionsHeader}>
            <TransactionCell text="Date" />
            <TransactionCell text="Subject" />
            <TransactionCell text="Amount" />
            <TransactionCell text="Category" />
            <TransactionCell text="Subcategory" />
            <TransactionCell text="Share" />
            <TransactionCell text="Share%" />
            <TransactionCell text="Debt" />
            <TransactionCell text="Save" />
        </div>
    )
}