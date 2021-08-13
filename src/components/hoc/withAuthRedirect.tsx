import React from "react";
import { connect } from "react-redux";
import {Redirect} from "react-router-dom";


export const withAuthRedirect = (Component: any) => {
    let mapStateToPropsRedirect = (state: any) => ({
        isAuth: state.authReducer.isAuth
    })

    class RedirectComponent extends React.Component<any, any> {
        render() {
            if (!this.props.isAuth) {
                return <Redirect to={'/login'}/>
            }
            return <Component {...this.props}/>
        }
    }

    let connectedAuthRedirectComponent = connect(mapStateToPropsRedirect)(RedirectComponent)
    return connectedAuthRedirectComponent
}