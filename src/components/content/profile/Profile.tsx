import s from './Profile.module.scss'
import PostsContainer from './posts/PostsContainer'


export const Profile = () => {

    return (
        <div className={s.profile}>
            <div className={s.profile__inner}>
                <div className={s.profile__avatar}>
                    <h1 className={s.profile__name}>name ferstname</h1>

                    <div className={s.profile__discription}>
                        <div className={s.profile__img}></div>
                        <ul className={s.profile__info}>
                            <li className={s.profile__item}>
                                age
                            </li>
                            <li className={s.profile__item}>
                                work
                            </li>
                            <li className={s.profile__item}>
                                work
                            </li>
                        </ul>
                    </div>
                </div>
                <PostsContainer/>
            </div>


        </div>
    )
}