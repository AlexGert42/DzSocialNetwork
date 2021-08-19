import React from "react";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import {StoreType} from "../../store/reducers";


export const withAuthRedirect = (Component: any) => {
    let mapStateToPropsRedirect = (state: StoreType) => ({
        isAuth: state.authReducer.isAuth
    })
    type RedirectComponentType = {
        isAuth: number | null
    }
    const RedirectComponent = (props: RedirectComponentType) => {
        if (!props.isAuth) {
            return <Redirect to={'/login'}/>
        }
        return <Component {...props}/>
    }


    return connect(mapStateToPropsRedirect)(RedirectComponent)
}