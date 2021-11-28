import React from 'react';
import "./styles.css";

function CreatePost(props) {
    return (
    <form>
      <h1>Create New Post</h1>
      <input type ="text" 
      onChange={props.saveTitleTostate}
      placeholder="title" 
      size="39" 
      required
      ></input>
      <br />
      <br />
      <input type ="text" 
      onChange={props.saveByTostate}
      placeholder="by" 
      size="39" 
      required
      ></input>
      <br />
      <br />
      <textarea 
      placeholder="contents" 
      onChange={props.saveBodyTostate}
      rows="8" cols="41"
      required
      ></textarea>
      <br />
      <br />
      <button>Save Post</button>
    </form>
    )

}
export default CreatePost;
