import {NavLink} from 'react-router-dom'
import s from './Header.module.scss'
import spiner_loader from "../../defaultStyle/img/SpinnerLoading.gif";
import React from "react";


export const Header = ({isFetching, login, id, email}: any) => {
    return (
        <div className={s.header}>
            <div className={s.header__inner}>
                <h1 className={s.header__logo}>social network</h1>
                <div className={s.header__login}>
                    <NavLink to={'/login'}>Login</NavLink>
                    <div>
                        {isFetching ?
                            <div>
                                Id: {id} <br/>
                                Login: {login} <br/>
                                Email: {email} <br/>
                            </div>
                            :
                            <div>
                                <img src={spiner_loader} alt=""/>
                            </div>
                        }

                    </div>
                </div>
            </div>
        </div>
    )
}
