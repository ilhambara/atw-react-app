import React from 'react';
import marked from 'marked';
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
    const postContent = marked(content)

    return (
        <>
            <Container>
                <PostWrapper>
                    <PostSection>
                        <PostHeading>{name}</PostHeading>
                        <PostDate>{date}</PostDate>
                        {featuredImage && <PostImage src={featuredImage.fields.file.url} alt={name} title={name} />}
                        <PostArticle dangerouslySetInnerHTML={{ __html: postContent }} />
                    </PostSection>
                </PostWrapper>
                <PostBottom />
            </Container>
        </>
    )
}

export default Post
