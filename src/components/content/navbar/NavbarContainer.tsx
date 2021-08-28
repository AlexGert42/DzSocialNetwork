import {compose} from "redux";
import React from "react";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import { Navbar } from "./Navbar";
import {navbarHendler} from "../../../store/app/actions";



export const NavbarContainer = (props: any) => {



    const closeNavbar = (value: boolean) => {
        props.navbarHendler(value)
    }
    return (
        <Navbar navbar={props.navbar} closeNavbar={closeNavbar}/>
    )
}

const mapStateToProps = (state: any) => ({
    navbar: state.appReducer.navbar
})

const mapDispatchToProps = {
    navbarHendler
}


export default compose<React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)
(NavbarContainer)