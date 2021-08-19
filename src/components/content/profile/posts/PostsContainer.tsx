import style from './Posts.module.scss'
import {Posts} from "./Posts";
import {connect} from "react-redux";
import {addPost} from '../../../../store/profile/actions'
import {removePost} from "../../../../store/profile/actions";
import {StoreType} from "../../../../store/reducers";
import React from 'react';


export type postType = {
    id: string
    name: string
    text: string
}

type postPropsType = {
    posts: Array<postType>
    addPost: (text: string) => void
    removePost: (id: string) => void
}


const PostsContainer = React.memo(({posts, addPost, removePost}: postPropsType) => {

    const deletePost = (id: string) => removePost(id)

    const attachPost = (text: string) => addPost(text)

    return (
        <Posts posts={posts} attachPost={attachPost} deletePost={deletePost} style={style}/>
    )
})

const mapStateToProps = (state: StoreType) => {
    return {
        posts: state.profileReducer.posts
    }
}

const mapDispatchToProps = {
    addPost,
    removePost
}



export default connect(mapStateToProps, mapDispatchToProps)(PostsContainer)