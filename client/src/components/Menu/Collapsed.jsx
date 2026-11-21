import images from '@assets/icons/index.js'
import Button from '@components/Buttons/Button.jsx'

export default function Collapsed() {
    return(
        <ul>
            <li><Button href="#" icon={images.home} alt="home icon" type="square" /></li>
            <li><Button href="#" icon={images.transaction} alt="transactions icon" type="square" /></li>
            <li><Button href="#" icon={images.settlements} alt="settlements icon" type="square" /></li>
        </ul>
    )
}