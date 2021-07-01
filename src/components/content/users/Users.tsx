import axios from "axios";
import {getUsersAction} from "../../../store/users/actions";


export const Users = ({users}: any) => {
    const getUsers = () => {
        if (users.length === 0) {
            axios.get('https://social-network.samuraijs.com/api/1.0/users')
                .then((response: any) => {
                    getUsersAction(response.data.items)
                })
        }
    }



    return (
        <div>
            <h1>USERS</h1>
            <button onClick={getUsers}>get users</button>
            {users.map((el: any) => {
               return <li>
                   1
               </li>
            })}
        </div>
    )
}

