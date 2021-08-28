import { Drawer } from 'antd'
import { NavLink } from 'react-router-dom'
import s from './Navbar.module.scss'


export const Navbar = ({navbar, closeNavbar}: any) => {

    return (
        <Drawer

            title="Navbar"
            placement={'left'}
            closable={false}
            onClose={() => closeNavbar(false)}
            visible={navbar}
            key={'left'}
        >
            <div className={s.navbar__inner}>
                <ul className={s.navbar__list}>
                    <li className={s.navbar__item}>
                        <NavLink onClick={() => closeNavbar(false)} to={'/profile/:userId?'}>profile</NavLink>
                    </li>
                    <li className={s.navbar__item}>
                        <NavLink onClick={() => closeNavbar(false)} to={'/dialogs'}>dialogs</NavLink>
                    </li>
                    <li className={s.navbar__item}>
                        <NavLink onClick={() => closeNavbar(false)} to={'/users'}>users</NavLink>
                    </li>
                </ul>
            </div>
        </Drawer>
    )
}