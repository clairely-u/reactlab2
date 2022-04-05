import React, {useState} from "react";
import Post from './models/Post'


 function SocialPosts( ){
    const [posts, setPosts] = useState<Post[]> ([
        {
            title: "Oop",
            thought: "Here we go again"
        }
     ]);

    return
    (<div className="SocialPosts__container">
        <p>{posts}</p>
    </div>)

}

export default SocialPosts;