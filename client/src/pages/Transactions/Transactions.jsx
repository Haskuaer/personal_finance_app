import { useState } from 'react'
import { MenuContext } from '@contexts/MenuContext.js'
// import MenuHidden from '@components/Menu/Hidden/MenuHidden.jsx';
// import MenuOpen from '@components/Menu/Open/MenuOpen.jsx'
import Menu from '@components/Menu/Menu.jsx'
import ActionButton from '@components/Buttons/ActionButton/ActionButton.jsx'
import TransactionComponents from './components/index.js'
import styles from './Transactions.module.css'
import images from '@assets/icons/index.js'
import TransactionsTable from './components/TransactionsTable/TransactionsTable.jsx'

const { TransactionHeader, TransactionRow } = TransactionComponents;

export default function Transactions() {

    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const openMenu = (isMenuOpen) => {
        return isMenuOpen ? <MenuOpen /> : <MenuHidden />;
    }

    return (
        <div className="container">
            <MenuContext.Provider value={{ isMenuOpen, setIsMenuOpen }}>
                <Menu />
            </MenuContext.Provider>
            <main className="main-section">
                <section className={styles.actionSection}>
                    <ActionButton image={images.sort} alt="sort icon" />
                    <ActionButton image={images.filter} alt="filter icon" />
                    <ActionButton image={images.searchSm} alt="search icon" />
                    <ActionButton image={images.importIcon} alt="import icon" />
                    <ActionButton image={images.plus} alt="plus icon" />
                </section>
                {/* <section className={styles.transactionsSection}>
                    <TransactionHeader />
                    <TransactionRow date="10.11" subject="Adam" amount="3.00" category="shopping" subcategory="mix" share="YES" sharePercent="50%" debt="YES" save="YES" />
                    <TransactionRow date="10.11" subject="Adam" amount="3.00" category="shopping" subcategory="mix" share="YES" sharePercent="50%" debt="YES" save="YES" />
                    <TransactionRow date="10.11" subject="Adam" amount="3.00" category="shopping" subcategory="mix" share="YES" sharePercent="50%" debt="YES" save="YES" />
                    <TransactionRow date="10.11" subject="Adam" amount="3.00" category="shopping" subcategory="mix" share="YES" sharePercent="50%" debt="YES" save="YES" />
                    <TransactionRow date="10.11" subject="Adam" amount="3.00" category="shopping" subcategory="mix" share="YES" sharePercent="50%" debt="YES" save="YES" />
                </section> */}
                <TransactionsTable />
            </main>
        </div>
    )
}