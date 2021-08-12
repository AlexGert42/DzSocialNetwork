import {connect} from "react-redux"
import {Users} from "./Users"
import {
    chengeFollowingUserThunk,
    chengePageAction,
    followedAction, followingDisabledAction,
    getTotalCountAction,
    getUsersAction, getUsersThunk,
    loaderAction
} from "../../../store/users/actions";
import React from "react";


class UsersContainer extends React.Component<any, any> {

    componentDidMount() {
        this.props.getUsersThunk(this.props.pageCount)
    }

    chengePage = (count: any) => {
        this.props.getUsersThunk(count)
    }

    followUser = (flag: number, id: string) => {
        this.props.chengeFollowingUserThunk(flag, id)
    }


    render() {
        return <Users
            users={this.props.users}
            totalCount={this.props.totalCount}
            loader={this.props.loader}
            followingDisabled={this.props.followingDisabled}
            chengePage={this.chengePage}
            followUser={this.followUser}
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
    followingDisabledAction,

    getUsersThunk,
    chengeFollowingUserThunk
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)