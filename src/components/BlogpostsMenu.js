import React from 'react';
import { Link } from 'react-router-dom';


function BlogpostsMenu({ blogposts }) {
    return (
    <>
    {blogposts.map((blogpost, key) => (
        <Link key={key} to={`/${blogpost.id}`}>
            <h3>{blogpost.heading}</h3>
            <p>{blogpost.blogpost[0].substring(0, 150)}...</p>
        </Link>
    ))}
    </>
    );   
}

export default BlogpostsMenu;