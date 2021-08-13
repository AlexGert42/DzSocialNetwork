import s from './Content.module.scss'
import {Navbar} from './navbar/Navbar'
import ProfileContainer from './profile/ProfileContainer'
import DialogsContainer from './dialogs/DialogsContainer'
import {Redirect, Route, Switch} from "react-router-dom";
import UsersContainer from './users/UsersContainer';
import LoginContainer from './login/LoginContainer';


export const Content = () => {

    return (
        <main className={s.content}>
            <div className={s.content__nav}>
                <Navbar/>
            </div>
            <div className={s.content__page}>
                <Switch>
                    <Route path={'/'} exact render={() => <Redirect to={'/profile/:userId?'}/>}/>
                    <Route path={'/login'} component={LoginContainer}/>
                    <Route path={'/profile/:userId?'} component={ProfileContainer} />
                    <Route path={'/dialogs'} component={DialogsContainer}/>
                    <Route path={'/users'} component={UsersContainer}/>
                </Switch>
            </div>
        </main>
    )
}