

export const Post = ({style, id, userName, text, deletePost}: any) => {


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