import {useState} from "react";

export const Dialogs = ({style, users, dialog, getMessage, addMessageUser, userId}: any) => {
    const [value, setValue] = useState('')


    const onChengeTextarea = (e: any) => setValue(e.target.value)

    const clickHendler = (e: any) => {
        e.preventDefault()
        console.log(userId)
        addMessageUser(userId, value)
    }
    return (
        <div className={style.dialog}>
            <div className={style.dialog__users}>
                <ul>
                    {!users ?
                        null
                        :
                        users.map((el: any) => {
                            return (
                                <div key={el.id}>
                                    <li className={style.dialog__user } onClick={() => getMessage(el.id)}>{el.name}</li>
                                </div>
                            )
                        })}
                </ul>

                <div>
                    <Message style={style} dialog={dialog}/>
                </div>

            </div>
            <form onSubmit={clickHendler}>
                <textarea value={value} onChange={onChengeTextarea}/>
                <button type={'submit'}>will send</button>
            </form>

        </div>
    )
}




export const Message = ({dialog, style}: any) => {


    return (
        <div className={style.dialog__message}>
            {!dialog ? null : dialog.map((el: any) => {
                return <div key={el.id}>
                    <div className={style.dialog__message_item}>{el.message}</div>
                    <div>{el.name}</div>
                </div>
            })}
        </div>
    )
}