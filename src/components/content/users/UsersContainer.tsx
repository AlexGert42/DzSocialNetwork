import { connect } from "react-redux"
import { Users } from "./Users"
import axios from "axios"
import {getUsersAction} from "../../../store/users/actions";


const UsersContainer = (props: any) => {
    console.log(props.users)




    return <Users users={props.users}/>
}

const mapStateToProps = (state: any) => ({
    users: state.userReducer.users
})





const mapDispatchToProps = {
    getUsersAction
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)