import {Content} from './components/content/Content'
import {Footer} from './components/footer/Footer'
import {BrowserRouter} from 'react-router-dom'
import HeaderContainer from "./components/header/HeaderContainer";
import {compose} from "redux";
import React, {useEffect} from "react";
import {connect} from "react-redux";
import {initializedThunk} from "./store/app/actions";
import spiner from './defaultStyle/img/initSpiner.gif';
import {StoreType} from "./store/reducers";


type AppPropsType = {
    initialized: boolean
    initializedThunk: () => void
}


const App = (props: AppPropsType) => {

    useEffect(() => {
        props.initializedThunk()
    }, [])



    if (props.initialized) {
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


const mapStateToProps = (state: StoreType) => ({
    initialized: state.appReducer.initialized
})

const mapDispatchToProps = {
    initializedThunk
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps)
)(App)
