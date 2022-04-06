import React, { useState, ChangeEvent, FormEvent } from "react";
import Post from "./models/Post";

interface Props {
    onSubmit: (post: Post) => void;
}

export default function PostForm({onSubmit}: Props) {
    const [showForm, setShowForm] = useState(false);
    const [title, setTitle] = useState("");
    function handleNewTitle(e:ChangeEvent<HTMLInputElement>) {
        setTitle(e.target.value);
    };
    const [thought, setThought] = useState(" ");
    function handleNewThought(e:ChangeEvent<HTMLInputElement>) {
        setThought(e.target.value);
    };
    function handleSubmit(e:FormEvent) {
        e.preventDefault();
        onSubmit({title, thought})
    };

    return (
        <div className="PostForm">
            <button className="NewThought" onClick = {() => setShowForm(true)}>New Thought</button>
       
     
             {
                 showForm ?
                 <form id = "PostForm" onSubmit = {handleSubmit}>
                <label htmlFor="Callback__title">Title</label>
                <input id = "Callback__title" type = "text" required value = {title}
                onChange = {e => setTitle(e.target.value)}/>
                <label htmlFor = "Callback__thought">Thought</label>
                <input id = "Callback__thought" type = "text" required value = {thought}
                onChange = {e => setThought(e.target.value)}></input>

                <input type="submit" value="Submit"/>
            </form>:
            <p></p>}
        </div>
    )
}