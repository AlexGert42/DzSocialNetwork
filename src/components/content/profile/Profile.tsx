import s from './Profile.module.scss'
import PostsContainer from './posts/PostsContainer'
import spiner_loader from "../../../defaultStyle/img/SpinnerLoading.gif";
import React from "react";
import {ProfileStatus} from "./profileStatus/ProfileStatus";

type ProfilePropsType = {
    profile: any
    status: string
    setChengeStatus: (status: string) => void
}


export const Profile = React.memo(  ({profile, setChengeStatus, status}: ProfilePropsType) => {
    if (!profile) {
        return <img src={spiner_loader} alt=""/>
    } else {
        return (
            <div className={s.profile}>
                <div className={s.profile__inner}>
                    <div className={s.profile__avatar}>

                        <h1 className={s.profile__name}>{profile.fullName}</h1>

                       <ProfileStatus setChengeStatus={setChengeStatus} statusText={status}/>

                        <div className={s.profile__discription}>
                            <div className={s.profile__img}>
                                <img src={profile.photos.large} alt="avatar"/>
                            </div>
                            <ul className={s.profile__info}>
                                <li className={s.profile__item}>
                                    About Me: {profile.aboutMe}
                                </li>
                                <li className={s.profile__item}>
                                    {profile.lookingForAJob? `Work: ${profile.lookingForAJobDescription}` : ''}
                                </li>
                            </ul>
                        </div>
                    </div>
                    <PostsContainer/>
                </div>
            </div>
        )
    }
})