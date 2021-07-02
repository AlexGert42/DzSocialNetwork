import React from "react";
import { connect } from "react-redux";
import {Profile} from "./Profile";
import axios from "axios";


class ProfileContainer extends React.Component<any, any> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${2}`).then(res => {
            console.log(res)
        })
    }


    render() {
        return <Profile/>
    }
}

const mapStateToProps = (state: any) => {

}
const mapDispatchToProps = ({

})

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer)