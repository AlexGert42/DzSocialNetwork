
type postPropsType = {
    style: any
    id: string
    userName: string
    text: string
    deletePost: (id: string) => void
}



export const Post = ({style, id, userName, text, deletePost}: postPropsType) => {

    return (
        <div className={style.post}>
            <div className={style.post__avatar}></div>
            <div className={style.post__inner}>
               <p>{userName}</p>
                <p>{text}</p>
                <p onClick={() => deletePost(id)}>X</p>
            </div>
        </div>
    )
}