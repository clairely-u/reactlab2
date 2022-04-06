import React, {useState, ChangeEvent} from "react";
import Post from './models/Post'

interface Props {
    post: Post;
}

export function PostInList({post}: Props) {
    
    return (
        <div className = "PostList">
        <h2>{post.title}</h2>
        <p>{post.thought}</p>
        </div>
    )
}