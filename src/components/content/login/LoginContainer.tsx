import React from "react";
import { connect } from "react-redux";
import { Login } from "./Login";


class LoginContainer extends React.Component<any, any> {


    render() {
        return <Login/>
    }
}

const mapStateToProps = (state: any) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer)