import React from 'react';
import { Container } from '../../globalStyles';
import {
    PostWrapper,
    PostSection,
    PostHeading,
    PostDate,
    PostImage,
    PostArticle,
    PostBottom
} from './PostSection.elements';

const Post = ({ article }) => {
    console.log(article)

    const { name, date, featuredImage, content } = article.fields

    return (
        <>
            <Container>
                <PostWrapper>
                    <PostSection>
                        <PostHeading>{name}</PostHeading>
                        <PostDate>{date}</PostDate>
                        {featuredImage && <PostImage src={featuredImage.fields.file.url} alt={name} title={name} />}
                        <PostArticle>{content}</PostArticle>
                    </PostSection>
                </PostWrapper>
                <PostBottom>...</PostBottom>
            </Container>
        </>
    )
}

export default Post
