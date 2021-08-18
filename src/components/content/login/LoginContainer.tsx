import React from "react";
import { connect } from "react-redux";
import { Login } from "./Login";
import {loginThunk} from "../../../store/auth/actions";
import {Redirect} from "react-router-dom";


class LoginContainer extends React.Component<any, any> {


    loginHendler = (data: any) => {
        this.props.loginThunk(data.login, data.password, data.rememberMe)
    }

    render() {
        if (this.props.isAuth) {
            return <Redirect to={'/profile/:userId?'}/>
        }
        return <Login loginHendler={this.loginHendler}/>
    }
}

const mapStateToProps = (state: any) => ({
    isAuth: state.authReducer.isAuth
})

const mapDispatchToProps = {
    loginThunk
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer)