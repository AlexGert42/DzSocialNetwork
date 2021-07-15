import { connect } from 'react-redux'
import { Header } from './Header'
import React from "react";
import {StoreType} from "../../store/reducers";
import axios from "axios";
import {isFetchingAuth, setAuthData} from "../../store/auth/actions";
import {withRouter} from "react-router-dom";


class HeaderContainer extends React.Component<any, any>  {

    componentDidMount() {
        this.props.isFetchingAuth(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        })
            .then(res => {
                if (res.data.resultCode === 0) {
                    this.props.setAuthData(res.data.data)
                    this.props.isFetchingAuth(false)
                }
            })
    }


    render() {
        return <Header {...this.props} />
    }
}

const mapStateToProps = (state: StoreType) => ({
    login: state.authReduscer.login,
    id: state.authReduscer.id,
    email: state.authReduscer.email,
    isFetching: state.authReduscer.isFetching
})
const mapDispatchToProps = ({
    setAuthData,
    isFetchingAuth
})


const WithUrlDataContainerComponent = withRouter(HeaderContainer)
export default connect(mapStateToProps, mapDispatchToProps)(WithUrlDataContainerComponent)