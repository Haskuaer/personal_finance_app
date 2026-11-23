import styles from './TransactionsTable.module.css'
import TransactionsHeader from './TransactionsHeader.jsx'
import TransactionsRow from './TransactionsRow.jsx'

export default function TransactionsTable() {
    return(
        <table>
            <TransactionsHeader />
            <TransactionsRow />
            <TransactionsRow />
            <TransactionsRow />
        </table>
    )
}