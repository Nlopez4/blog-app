import React, { useState } from 'react';
import "./styles.css";
import CreatePost from "../../components/CreatePost";

const CardPost = () => {
    const [title, setTitle] = useState('')
    const [by, setBy] = useState('')
    const [body, setBody] = useState('')

    const saveTitleTostate = event => {
        setTitle(event.target.value);
    };

    const saveByTostate = event => {
        setBy(event.target.value);
    };

    const saveBodyTostate = event => {
        setBody(event.target.value);
    };

    return (
        <CreatePost
        saveTitleTostate = { saveTitleTostate }
        saveByTostate = { saveByTostate }
        saveBodyTostate = { saveBodyTostate }
        />
    )
   
}



export default CardPost;
