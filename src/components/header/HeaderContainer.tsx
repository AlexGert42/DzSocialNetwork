import { connect } from 'react-redux'
import { Header } from './Header'
import React from "react";
import {StoreType} from "../../store/reducers";
import {authMeThunk, isFetchingAuth, setAuthData} from "../../store/auth/actions";
import {withRouter} from "react-router-dom";


class HeaderContainer extends React.Component<any, any>  {

    componentDidMount() {
        this.props.authMeThunk()
    }


    render() {
        return <Header {...this.props} />
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

    authMeThunk
})


const WithUrlDataContainerComponent = withRouter(HeaderContainer)
export default connect(mapStateToProps, mapDispatchToProps)(WithUrlDataContainerComponent)