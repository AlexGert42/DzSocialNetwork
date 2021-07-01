import {connect} from 'react-redux'
import {Dialogs} from './Dialogs'
import style from './Dialogs.module.scss'
import {useState} from "react";
import {addMessage} from "../../../store/dialogs/actions";


const DialogsContainer = ({users, dialogs, addMessage}: any) => {
    const [dialog, setDialog] = useState([])
    const [userId, setUserId] = useState('')


    const getMessage = (id: string) => {
        setDialog(dialogs[id])
        setUserId(id)
    }

    const addMessageUser = (id: string, text: string) => {
        addMessage(id, text)
        setDialog(dialogs[id])
        setUserId(id)
    }


    return <Dialogs
        style={style}
        users={users}
        dialog={dialog}
        getMessage={getMessage}
        addMessageUser={addMessageUser}
        userId={userId}
    />
}

const mapStateToProps = (state: any) => ({
    users: state.dialodsReduscer.users,
    dialogs: state.dialodsReduscer.message
})

const mapDispatchToProps = {
    addMessage
}

export default connect(mapStateToProps, mapDispatchToProps)(DialogsContainer)
