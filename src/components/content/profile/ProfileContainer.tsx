import React from "react";
import { connect } from "react-redux";
import {Profile} from "./Profile";
import {getProfileThunk, setUserProfile} from "../../../store/profile/actions";
import {StoreType} from "../../../store/reducers";
import { withRouter } from "react-router-dom";



class ProfileContainer extends React.Component<any, any> {
    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = 17952
        }
        this.props.getProfileThunk(userId)
    }


    render() {
        return <Profile profile={this.props.profile}/>
    }
}

const mapStateToProps = (state: StoreType) => ({
    profile: state.profileReducer.profile,


    profileId: state.authReduscer.id//?????
})
const mapDispatchToProps = ({
    setUserProfile,
    getProfileThunk
})

const WithUrlDataContainerComponent = withRouter(ProfileContainer)
export default connect(mapStateToProps, mapDispatchToProps)(WithUrlDataContainerComponent)