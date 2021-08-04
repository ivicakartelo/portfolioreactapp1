import React from 'react';
import blogpostsData from './blogposts-data';
import BlogpostsMenu from './BlogpostsMenu';

function HomePage() {
    return (
        <>     
            <BlogpostsMenu blogposts={blogpostsData} />     
        </> 
    );     
}
export default HomePage;