import SidebarButton from '@components/Buttons/SidebarButton/SidebarButton.jsx'
import Button from '@components/Buttons/Button.jsx'

export default function Expanded() {
    return (
        <>
            <section className={styles.sidebarSection}>
                <SidebarButton />
            </section>
            <section className={styles.searchSection}>
                <img src={images.search} alt="search icon"></img>
            </section>
            <ul>
                <li><Button href="#" text="Home" icon={images.home} alt="home icon" /></li>
            </ul>
        </>
    )
}