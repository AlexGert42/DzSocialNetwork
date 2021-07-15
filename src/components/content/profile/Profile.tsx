import s from './Profile.module.scss'
import PostsContainer from './posts/PostsContainer'
import avatar from '../../../defaultStyle/img/avatar_smoll.png'
import spiner_loader from "../../../defaultStyle/img/SpinnerLoading.gif";
import React from "react";

type ProfilePropsType = {
    profile: any
}


export const Profile = ({profile}: ProfilePropsType) => {
    if (!profile) {
        return <img src={spiner_loader} alt=""/>
    } else {
        return (
            <div className={s.profile}>
                <div className={s.profile__inner}>
                    <div className={s.profile__avatar}>

                        <h1 className={s.profile__name}>{profile.fullName}</h1>

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
}