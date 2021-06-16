import {Posts} from "./Posts";
import {connect} from "react-redux";
import {addPost} from '../../../../context/posts/actions'
import {removePost} from "../../../../context/posts/actions";


const PostsContainer = ({posts, addPost, removePost}: any) => {

    const deletePost = (id: string) => removePost(id)



    const attachPost = (text: any) => addPost(text)



    return (
        <Posts posts={posts} attachPost={attachPost} deletePost={deletePost}/>
    )
}

const mapStateToProps = (state: any) => {
    return {
        posts: state.postReducer.posts
    }
}

const mapDispatchToProps = {
    addPost,
    removePost
}


export default connect(mapStateToProps, mapDispatchToProps)(PostsContainer)