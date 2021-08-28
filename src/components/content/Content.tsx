import s from './Content.module.scss'
import {Navbar} from './navbar/Navbar'
import ProfileContainer from './profile/ProfileContainer'
import DialogsContainer from './dialogs/DialogsContainer'
import {Redirect, Route, Switch} from "react-router-dom";
import UsersContainer from './users/UsersContainer';
import LoginContainer from './login/LoginContainer';
import {Col, Row } from 'antd';
import NavbarContainer from './navbar/NavbarContainer';



export const Content = () => {


    return (
        <Row className={s.main}>
            {/*<Col span={5} offset={1}>*/}
                <NavbarContainer/>
            {/*</Col>*/}

            <Col span={24}>
                <Switch>
                    <Route path={'/'} exact render={() => <Redirect to={'/profile/:userId?'}/>}/>
                    <Route path={'/login'} component={LoginContainer}/>
                    <Route path={'/profile/:userId?'} component={ProfileContainer}/>
                    <Route path={'/dialogs'} component={DialogsContainer}/>
                    <Route path={'/users'} component={UsersContainer}/>
                </Switch>
            </Col>
        </Row>
    )
}