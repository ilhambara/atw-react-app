import React from 'react';
import PostSection from './PostSection';

const Posts = ({ posts }) => {
    return (
        <div>
            {posts.map((article, index) => <PostSection article={article} key={index}>Post</PostSection>)}
        </div>
    )
}

export default Posts
