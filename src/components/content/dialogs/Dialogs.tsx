import s from './Dialogs.module.scss'

export const Dialogs = () => {

    return (
        <div className={s.dialog}>
            <ul className={s.dialog__users}>
               <li className={s.dialog__user}>user</li>
                <li className={s.dialog__user}>user</li>
                <li className={s.dialog__user}>user</li>
                <li className={s.dialog__user}>user</li>
                <li className={s.dialog__user}>user</li>
                <li className={s.dialog__user}>user</li>
                <li className={s.dialog__user}>user</li>
                <li className={s.dialog__user}>user</li>
            </ul>
            <div className={s.dialog__message}></div>
        </div>
    )
}