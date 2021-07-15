import axios from "axios";
import React from "react";
import {NavLink} from "react-router-dom";

import avatar_smoll from '../../../defaultStyle/img/avatar_smoll.png'
import spiner_loader from '../../../defaultStyle/img/SpinnerLoading.gif'


export const Users = (props: any) => {


    return (

        <div>
            <h1>USERS</h1>
            {props.loader ?
                <img src={spiner_loader} alt=""/>
                :
                <div>
                    <div style={{display: 'flex', width: '1200px', overflow: 'auto', margin: '50px'}}>
                        {
                            new Array(Math.ceil(props.totalCount / 10)).fill(0).map((el, i) => {
                                return <div key={i} onClick={() => props.chengePage(i)}
                                            style={{margin: '5px'}}>{i}</div>
                            })

                        }
                    </div>
                    {props.users.map((el: any) => {
                        return <li key={el.id} style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            margin: '50px'
                        }}>
                        <span>
                            <p>
                                {el.small ?
                                    el.small
                                    :
                                    <NavLink to={`/profile/${el.id}`}>
                                        <img src={avatar_smoll} alt="Avatar"/>
                                    </NavLink>}
                            </p>
                            {
                                el.followed?
                                    <button onClick={() => {
                                        axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${el.id}`, {
                                            withCredentials: true,
                                            headers: {
                                                "API-KEY": '9708f55c-7c56-4108-a0bf-76b37c22e7d1'
                                            }
                                        }).then(res => {
                                            console.log(res)
                                        })
                                    }
                                    }>Follov</button>
                                    :
                                    <button onClick={() => {
                                        axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${el.id}`, {}, {
                                            withCredentials: true,
                                            headers: {
                                                "API-KEY": '9708f55c-7c56-4108-a0bf-76b37c22e7d1'
                                            }
                                        })
                                            .then(res => {
                                                console.log(res)
                                                props.folowedAction(true)
                                            })
                                    }
                                    }>Onfollov</button>
                            }


                        </span>
                            <span>
                            <p>{el.name}</p>

                        </span>
                        </li>
                    })}
                </div>
            }
        </div>
    )
}

