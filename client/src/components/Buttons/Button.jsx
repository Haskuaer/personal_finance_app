import classNames from 'classnames/bind'
import styles from './Button.module.css'

const cx = classNames.bind(styles);

export default function Button(props) {

    const { href, text, icon, alt, type } = props

    return (
        <a href={href}
            className={cx('button', type)} >
            { icon && <img src={icon} alt={alt ?? ''} /> }
            {text}
        </a>
    )
}