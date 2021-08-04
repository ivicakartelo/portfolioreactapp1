import React from 'react';
import blogpostsData from './blogposts-data';
import BlogpostsMenu from './BlogpostsMenu';

function BlogPost({ match }) {
    const id = match.params.id;
    const blogpost = blogpostsData.find(blogpost => blogpost.id === id);
    const otherBlogposts = blogpostsData.filter(blogpost => blogpost.id !== id);

    return (
        <>
            <h1>{blogpost.heading}</h1>
                {blogpost.blogpost.map((paragraph, key) => (
                    <p key={key}>{paragraph}</p>
            ))}
            <h3>Other blogposts:</h3>
                <BlogpostsMenu blogposts={otherBlogposts} />     
        </>
    );		
}
export default BlogPost;