import style from './navbar.module.scss'

export function Navbar() {

    return (
        <nav className={style.navbarRoot}>
            <p className={style.logo}>스마트 신발장</p>
        </nav>
    )
}