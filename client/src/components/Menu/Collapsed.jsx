import SidebarButton from '@components/Buttons/SidebarButton/SidebarButton.jsx'
import HiddenMenuButton from '@components/Buttons/HiddenMenuButton/HiddenMenuButton.jsx'
import images from '@assets/icons/index.js'

export default function Collapsed() {
    return(
        <ul>
            <li><SidebarButton image={images.sidebar} /></li>
            <li><HiddenMenuButton image={images.home} /></li>
            <li><HiddenMenuButton image={images.transaction} /></li>
            <li><HiddenMenuButton image={images.settlements} /></li>
        </ul>
    )
}