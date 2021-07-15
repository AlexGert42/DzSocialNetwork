import {connect} from "react-redux"
import {Users} from "./Users"
import axios from "axios"
import {
    chengePageAction,
    folowedAction,
    getTotalCountAction,
    getUsersAction,
    loaderAction
} from "../../../store/users/actions";
import React from "react";

class UsersContainer extends React.Component<any, any> {

    componentDidMount() {
        this.props.loaderAction(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users/?page=${this.props.pageCount}`, {
            withCredentials: true
        })
            .then((response: any) => {
                this.props.getTotalCountAction(response.data.totalCount)
                this.props.getUsersAction(response.data.items)
                this.props.loaderAction(false)
            })
    }

    chengePage = (count: any) => {
        this.props.loaderAction(true)
        this.props.chengePageAction(count)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users/?page=${count}`, {
            withCredentials: true
        })
            .then((response: any) => {
                console.log(response.data.items)
                this.props.getUsersAction(response.data.items)
                this.props.loaderAction(false)
            })
    }

    render () {
        return <Users
            users={this.props.users}
            totalCount={this.props.totalCount}
            loader={this.props.loader}
            chengePage={this.chengePage}
            folowedAction={this.props.folowedAction}
        />
    }
}

const mapStateToProps = (state: any) => ({
    users: state.userReducer.users,
    pageCount: state.userReducer.pageCount,
    totalCount: state.userReducer.totalCount,
    loader: state.userReducer.loader
})


const mapDispatchToProps = {
    getUsersAction,
    getTotalCountAction,
    chengePageAction,
    loaderAction,
    folowedAction
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)