import React, {useState, ChangeEvent} from "react";
import Post from './models/Post'

interface Props {
    post: Post;
}

export function PostInList({post}: Props) {
    const [postTitle, setPostTitle] = useState("");
    function handleTitle (e:ChangeEvent<HTMLInputElement>) {
        setPostTitle(e.target.value);
    }
    const [postThought, setPostThought] = useState(" ");
    function handlePostThought (e: ChangeEvent<HTMLInputElement>) {
        setPostThought(e.target.value);
    }

    return (
        <div className = "PostList">
        <h2>{postTitle}</h2>
        <p>{postThought}</p>
        </div>
    )
}