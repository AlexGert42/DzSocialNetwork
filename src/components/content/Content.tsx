import s from './Content.module.scss'
import {Navbar} from './navbar/Navbar'
import {Profile} from './profile/Profile'
import {Dialogs} from './dialogs/Dialogs'
import {Redirect, Route, Switch} from "react-router-dom";


export const Content = () => {

    return (
        <main className={s.content}>
            <div className={s.content__nav}>
                <Navbar/>
            </div>
            <div className={s.content__page}>
                <Switch>
                    <Route path={'/'} exact render={() => <Redirect to={'/profile'}/>}/>
                    <Route path={'/profile'} component={Profile}/>
                    <Route path={'/dialogs'} component={Dialogs}/>
                </Switch>
            </div>
        </main>
    )
}