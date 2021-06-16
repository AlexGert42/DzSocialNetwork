import {Post} from './post/Post'
import s from './Posts.module.scss'
import {useState} from "react";





export const Posts = ({posts, deletePost, attachPost}: any) => {
    const [value, setValue] = useState('')

    const handleSubmit = (e: any) => {
        e.preventDefault();
        attachPost(value)
    }

    return (
        <div className={s.posts}>
            <form onSubmit={handleSubmit}>
                <textarea value={value} onChange={e => setValue(e.target.value)} placeholder={'Enter Text'}/>
                <button type="submit">Enter</button>
            </form>
          <div className={s.posts__inner}>
              {!posts ? false : posts.map((el: any) => {
                  return (
                      <Post style={s} id={el.id} userName={el.name} text={el.text} deletePost={deletePost}/>
                  )
              })}
          </div>

        </div>
    )
}