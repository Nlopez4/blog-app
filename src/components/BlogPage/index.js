import React from 'react';
import "./styles.css";
import CardPost from "../../components/CardPost";
import Welcome from "../../components/Welcome";
import CreatePost from "../../components/CreatePost";

function BlogPage() {
    return (
        <div>
            <Welcome />
            <div>
            <CardPost />
            </div>
        </div>

    )
}

export default BlogPage;