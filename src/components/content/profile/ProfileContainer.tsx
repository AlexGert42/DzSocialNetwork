import React from "react";
import { connect } from "react-redux";
import {Profile} from "./Profile";
import axios from "axios";
import {setUserProfile} from "../../../store/profile/actions";
import {StoreType} from "../../../store/reducers";
import { withRouter } from "react-router-dom";



class ProfileContainer extends React.Component<any, any> {
    componentDidMount() {
        let userId = this.props.match.params.userId
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId || 2}`).then(res => {
            this.props.setUserProfile(res.data)
        })
    }


    render() {
        return <Profile profile={this.props.profile}/>
    }
}

const mapStateToProps = (state: StoreType) => ({
    profile: state.profileReducer.profile
})
const mapDispatchToProps = ({
    setUserProfile,
})

const WithUrlDataContainerComponent = withRouter(ProfileContainer)
export default connect(mapStateToProps, mapDispatchToProps)(WithUrlDataContainerComponent)