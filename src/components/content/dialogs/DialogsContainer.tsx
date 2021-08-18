import {connect} from 'react-redux'
import React from "react";
import {addMessage} from "../../../store/dialogs/actions";
import style from './Dialogs.module.scss'
import { Dialogs } from './Dialogs';
import { compose } from 'redux';
import {withAuthRedirect} from "../../hoc/withAuthRedirect";


class DialogsContainer extends React.Component<any, any> {





    render () {
        return <Dialogs
            style={style}
        />
    }

}

const mapStateToProps = (state: any) => ({

})

const mapDispatchToProps = {
    addMessage
}


export default compose<React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)
(DialogsContainer)

