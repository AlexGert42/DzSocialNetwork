import {Post} from './post/Post'
import React, {useState} from "react";
import {postType} from "./PostsContainer";


type postsPropsTYpe = {
    posts: Array<postType>
    deletePost: (id: string) => void
    attachPost: (text: string) => void
    style: any
}




export const Posts = ({posts, deletePost, attachPost, style}: postsPropsTYpe) => {
    const [value, setValue] = useState('')

    const handleSubmit = (e: any) => {
        e.preventDefault();
        if (value.trim()) {
            attachPost(value)
            setValue('')
        }


    }

    return (
        <div className={style.posts}>
            <form onSubmit={handleSubmit}>
                <textarea value={value} onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setValue(e.target.value)} placeholder={'Enter Text'}/>
                <button type="submit">Enter</button>
            </form>
          <div className={style.posts__inner}>
              {!posts ? false : posts.map((el: postType) => {
                  return (
                      <Post key={el.id} style={style} id={el.id} userName={el.name} text={el.text} deletePost={deletePost}/>
                  )
              })}
          </div>

        </div>
    )
}