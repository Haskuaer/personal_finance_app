import styles from './Menu.module.css'
import images from '@assets/icons/index.js'
import Button from '@components/Buttons/Button.jsx'

export default function Expanded() {
    return (
        <>
            <section className={styles.searchSection}>
                <img src={images.search} alt="search icon"></img>
            </section>
            <ul>
                <li><Button href="#" text="Home" icon={images.home} alt="home icon" /></li>
                <li><Button href="#" text="Transactions" icon={images.transaction} alt="transactions icon" /></li>
                <li><Button href="#" text="Settlements" icon={images.settlements} alt="settlements icon" /></li>
            </ul>
        </>
    )
}