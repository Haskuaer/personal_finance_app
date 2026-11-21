import classNames from 'classnames/bind'
import styles from './Menu.module.css'
import images from '@assets/icons/index.js'
import { useContext } from 'react'
import { MenuContext } from '@contexts/MenuContext.js'
import Expanded from './Expanded.jsx'
import Collapsed from './Collapsed.jsx'
import Button from '@components/Buttons/Button.jsx'
import SidebarButton from '@components/Buttons/SidebarButton/SidebarButton.jsx'

const cx = classNames.bind(styles);

export default function MenuOpen() {

    const { isMenuOpen } = useContext(MenuContext);

    return(
        <nav className={cx('menu', {
            expanded: isMenuOpen,
            collapsed: !isMenuOpen
        })}>
            <SidebarButton />
            
            {isMenuOpen ? <Expanded /> : <Collapsed />}
        </nav>
    )
}

