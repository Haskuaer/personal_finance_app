import { useState } from 'react'
import { MenuContext } from '@contexts/MenuContext.js'
import MenuHidden from '@components/Menu/Hidden/MenuHidden.jsx';
import MenuOpen from '@components/Menu/Open/MenuOpen.jsx'
import ActionButton from '@components/Buttons/ActionButton/ActionButton.jsx'
import TransactionsCell from '@components/GridCell/TransactionsCell.jsx'
import styles from './Transactions.module.css'
import images from '@assets/icons/index.js'

export default function Transactions() {

    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const openMenu = (isMenuOpen) => {
        return isMenuOpen ? <MenuOpen /> : <MenuHidden />;
    }

    return (
        <div className="container">
            <MenuContext.Provider value={{ isMenuOpen, setIsMenuOpen }}>
                {openMenu(isMenuOpen)}
            </MenuContext.Provider>
            <main className="main-section">
                <section className={styles.actionSection}>
                    <ActionButton image={images.sort} alt="sort icon" />
                    <ActionButton image={images.filter} alt="filter icon" />
                    <ActionButton image={images.searchSm} alt="search icon" />
                    <ActionButton image={images.importIcon} alt="import icon" />
                    <ActionButton image={images.plus} alt="plus icon" />
                </section>
                <section className={styles.transactionsSection}>
                    <TransactionsCell text="Date" />
                    <TransactionsCell text="Subject" />
                    <TransactionsCell text="Amount" />
                    <TransactionsCell text="Category" />
                    <TransactionsCell text="Subcategory" />
                    <TransactionsCell text="Share" />
                    <TransactionsCell text="Share%" />
                    <TransactionsCell text="Debt" />
                    <TransactionsCell text="Save" />
                    <TransactionsCell text="Date" />
                    <TransactionsCell text="Subject" />
                    <TransactionsCell text="Amount" />
                    <TransactionsCell text="Category" />
                    <TransactionsCell text="Subcategory" />
                    <TransactionsCell text="Share" />
                    <TransactionsCell text="Share%" />
                    <TransactionsCell text="Debt" />
                    <TransactionsCell text="Save" />
                </section>
            </main>
        </div>
    )
    return (
        <>
        
            
        </>
    )
}