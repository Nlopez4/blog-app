import React, { useState } from 'react';
import "./styles.css";

function CreatePost() {
    const [title, setTitle] = useState('')
    const [by, setBy] = useState('')
    const [body, setBody] = useState('')
    
    const handleTitleChange = event => {
        setTitle(event.target.value)
    };

    const handleByChange = event => {
        setBy(event.target.value)
    };

    const handleBodyChange = event => {
        setBody(event.target.value)
    };

    const handleSubmit = event => {
        event.preventDefault();
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Title </label>
                <input
                    type="title"
                    name="title"
                    placeholder="Title"
                    onChange={handleTitleChange}
                    value={title}
                />
            </div>
            <div>
            <label>By </label>
                <input
                    type="by"
                    name="by"
                    onChange={handleByChange}
                    value={by}
                />
            </div>
            <div>
            <label>Description</label>
                <textarea
                    type="body"
                    name="body"
                    placeholder="This post is about..."
                    onChange={handleBodyChange}
                    value={body}
                />
            </div>
            <input type="submit" value="Submit" />
        </form>
    )
}

export default CreatePost;