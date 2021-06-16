import s from './Header.module.scss'


export const Header = () => {

    return (
        <div className={s.header}>
            <div className={s.header__inner}>
                <h1 className={s.header__logo}>social network</h1>
            </div>
        </div>
    )
}