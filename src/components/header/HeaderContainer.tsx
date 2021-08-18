import { connect } from 'react-redux'
import { Header } from './Header'
import React from "react";
import {StoreType} from "../../store/reducers";
import {authMeThunk, isFetchingAuth, logoutThunk, setAuthData} from "../../store/auth/actions";
import {withRouter} from "react-router-dom";


class HeaderContainer extends React.Component<any, any>  {

    componentDidMount() {
        this.props.authMeThunk()
    }

    logout = () => {
        this.props.logoutThunk()
    }


    render() {
        return <Header {...this.props} logout={this.logout}/>
    }
}

const mapStateToProps = (state: StoreType) => ({
    login: state.authReducer.login,
    id: state.authReducer.id,
    email: state.authReducer.email,
    isFetching: state.authReducer.isFetching
})
const mapDispatchToProps = ({
    setAuthData,
    isFetchingAuth,

    authMeThunk,

    logoutThunk
})


const WithUrlDataContainerComponent = withRouter(HeaderContainer)
export default connect(mapStateToProps, mapDispatchToProps)(WithUrlDataContainerComponent)