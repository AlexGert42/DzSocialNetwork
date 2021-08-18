import {Content} from './components/content/Content'
import {Footer} from './components/footer/Footer'
import { BrowserRouter } from 'react-router-dom'
import HeaderContainer from "./components/header/HeaderContainer";
import {compose} from "redux";
import React from "react";
import {connect} from "react-redux";
import {initializedThunk} from "./store/app/actions";

import spiner from './defaultStyle/img/initSpiner.gif'


class App extends React.Component<any, any> {

    componentDidMount() {
        this.props.initializedThunk()
    }

    render() {
        if (this.props.initialized) {
            return (
                <BrowserRouter>
                    <HeaderContainer/>
                    <Content/>
                    <Footer/>
                </BrowserRouter>
            )
        } else {
            return (
                <div>
                    <div>
                        <img src={spiner} alt=""/>
                    </div>
                </div>
            )
        }
    }
}


const mapStateToProps = (state: any) => ({
    initialized: state.appReducer.initialized
})

const mapDispatchToProps = {
    initializedThunk
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps)
)(App)
