import React from "react";
import {connect} from "react-redux";
import {Profile} from "./Profile";
import {getProfileThunk, getStatusThunk, updateStatusThunk} from "../../../store/profile/actions";
import {StoreType} from "../../../store/reducers";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


class ProfileContainer extends React.PureComponent<any, any> {
    componentDidMount() {
        let userId = this.props.match.params.userId
        if (userId === ':userId') {
            userId = this.props.profileId
        }
        this.props.getProfileThunk(userId)
        this.props.getStatusThunk(userId)
    }

    setChengeStatus = (status: string) => {
        this.props.updateStatusThunk(status)
    }


    render() {
        return <Profile
            profile={this.props.profile}
            status={this.props.status}
            setChengeStatus={this.setChengeStatus}
        />
    }
}

const mapStateToProps = (state: StoreType) => ({
    profile: state.profileReducer.profile,
    status: state.profileReducer.status,
    profileId: state.authReducer.id,//?????


})
const mapDispatchToProps = ({
    getProfileThunk,
    getStatusThunk,
    updateStatusThunk
})


export default compose<React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    withRouter,
    withAuthRedirect
)(ProfileContainer)