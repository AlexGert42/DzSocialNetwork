import { NavLink } from 'react-router-dom'
import s from './Navbar.module.scss'


export const Navbar = () => {

    return (
        <div className={s.navbar}>
            <div className={s.navbar__inner}>
                <h2 className={s.navbar__title}>
                   navbar menu
                </h2>
                <ul className={s.navbar__list}>
                    <li className={s.navbar__item}>
                        <NavLink to={'/profile'}>profile</NavLink>
                    </li>
                    <li className={s.navbar__item}>
                        <NavLink to={'/dialogs'}>dialogs</NavLink>
                    </li>
                    <li className={s.navbar__item}>
                        <NavLink to={'/users'}>users</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    )
}