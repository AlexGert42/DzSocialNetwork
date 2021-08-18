import {Post} from './post/Post'
import React from "react";
import {postType} from "./PostsContainer";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, requiredField} from "../../../../utils/validators/validators";


type postsPropsTYpe = {
    posts: Array<postType>
    deletePost: (id: string) => void
    attachPost: (text: string) => void
    style: any
}


export const Posts = ({posts, deletePost, attachPost, style}: postsPropsTYpe) => {
    const postHendler = (data: any) => {
        console.log(data)
    }

    return (
        <div className={style.posts}>
            <ReduxFormPost onSubmit={postHendler}/>
            <div className={style.posts__inner}>
                {!posts ? false : posts.map((el: postType) => {
                    return (
                        <Post key={el.id} style={style} id={el.id} userName={el.name} text={el.text}
                              deletePost={deletePost}/>
                    )
                })}
            </div>
        </div>
    )
}

const maxLength = maxLengthCreator(20)

export const PostForm = (props: any) => {


    return (
        <form onSubmit={props.handleSubmit}>
            <Field
                component={'textarea'}
                name={'post'}
                validate={[requiredField, maxLength]}
            />
            <button type="submit">Enter</button>
        </form>
    )
}
const ReduxFormPost = reduxForm({
    form: 'post'
})(PostForm)