import React, {useState} from "react";
import Post from './models/Post'
import { PostInList } from "./PostInList";
import './SocialPosts.css'
import PostForm from "./PostForm";
import { title } from "process";


 function SocialPosts( ){
    const [posts, setPosts] = useState<Post[]> ([
        {
            title: "Oop",
            thought: "Here we go again"
        }
     ]);

     function handleAdd(post: Post) {
         setPosts(prev => [...prev, post])
     }

    return(
    <div className="SocialPosts__container">
        <PostForm onSubmit={handleAdd}/>
        <ul>
            {posts.map((post,  i) =>
            <PostInList key = {i}
                               post = {post}/> )}
        </ul>
    </div>)

}

export default SocialPosts;