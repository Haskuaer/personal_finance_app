import styles from './Transactions.module.css'
import images from '@assets/icons/index.js'

import ActionButton from '@components/Buttons/ActionButton/ActionButton.jsx'
import TransactionsTable from './components/TransactionsTable/TransactionsTable.jsx'


export default function Transactions() {

    return (
        <>
            <section className={styles.actionSection}>
                <ActionButton image={images.sort} alt="sort icon" />
                <ActionButton image={images.filter} alt="filter icon" />
                <ActionButton image={images.searchSm} alt="search icon" />
                <ActionButton image={images.importIcon} alt="import icon" />
                <ActionButton image={images.plus} alt="plus icon" />
            </section>

            <TransactionsTable />
        </>
    )
}