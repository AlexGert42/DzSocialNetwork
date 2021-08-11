import {connect} from "react-redux"
import {Users} from "./Users"
import {
    chengePageAction,
    followedAction, followingDisabledAction,
    getTotalCountAction,
    getUsersAction,
    loaderAction
} from "../../../store/users/actions";
import React from "react";
import {getFollowing, getUnFollowing, usersAPI} from "../../../api/api";

class UsersContainer extends React.Component<any, any> {

    componentDidMount() {
        this.props.loaderAction(true)
        usersAPI.getUsers(this.props.pageCount).then((response: any) => {
                this.props.getTotalCountAction(response.totalCount)
                this.props.getUsersAction(response.items)
                this.props.loaderAction(false)
            })
    }

    chengePage = (count: any) => {
        this.props.loaderAction(true)
        this.props.chengePageAction(count)
        usersAPI.getUsers(count).then((response: any) => {
                this.props.getUsersAction(response.items)
                this.props.loaderAction(false)
            })
    }

    followUser = (id: string) => {
        this.props.followingDisabledAction(true)
        getFollowing(id).then(response => {
            if (response.resultCode === 0) {
                this.props.followedAction(id)
                this.props.followingDisabledAction(false)
            }
        })
    }
    unfollowUser = (id: string) => {
        this.props.followingDisabledAction(true)
        getUnFollowing(id).then(response => {
            if (response.resultCode === 0) {
                this.props.followedAction(id)
                this.props.followingDisabledAction(false)
            }
        })
    }


    render () {
        return <Users
            users={this.props.users}
            totalCount={this.props.totalCount}
            loader={this.props.loader}
            followingDisabled={this.props.followingDisabled}
            chengePage={this.chengePage}
            followUser={this.followUser}
            unfollowUser={this.unfollowUser}
        />
    }
}

const mapStateToProps = (state: any) => ({
    users: state.userReducer.users,
    pageCount: state.userReducer.pageCount,
    totalCount: state.userReducer.totalCount,
    loader: state.userReducer.loader,
    folowed: state.userReducer.folowed,
    followingDisabled: state.userReducer.followingDisabled
})


const mapDispatchToProps = {
    getUsersAction,
    getTotalCountAction,
    chengePageAction,
    loaderAction,
    followedAction,
    followingDisabledAction
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)