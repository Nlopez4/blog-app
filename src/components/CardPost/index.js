import React from 'react';
import "./styles.css";

const card = {
    title: 'How to start a React App',
    by: 'Natalie Lopez',
    body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia',
};

function CardPost(props) {
    return (
        <div>
            <p>Title: {card.title}</p>
            <p>By: {card.by}</p>
            <p>Description: {card.body}</p>
        </div>
    )
}

export default CardPost;
