import { NavLink } from 'react-router-dom'
import classNames from 'classnames/bind'

import styles from './Button.module.css'

const cx = classNames.bind(styles);

export default function Button(props) {

    const { path, text, icon, alt, type } = props

    return (
        <NavLink 
            to={path}
            className={({ isActive }) => cx('primary', type, {
                active: isActive
            })}
        >
            {icon && <img src={icon} alt={alt ?? ''} />}
            {text}
        </NavLink>
    )
}