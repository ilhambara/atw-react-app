import { } from 'react-router-dom';
import styled from 'styled-components';


export const PostWrapper = styled.div`
    padding: 50px 0;
`;

export const PostSection = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: #fff;
`;

export const PostHeading = styled.h1`
    color: #23272a;
    font-size: 48px;
    margin-bottom: 20px;
`;

export const PostDate = styled.h3`
    padding: 20px 0;
    font-weight: 100;
`;

export const PostImage = styled.img`
    width: 100%;
    max-width: 480px;
    padding: 20px 0 40px 0;
`;

export const PostArticle = styled.p`
    width: 100%;
    max-width: 1100px;
    font-size: 16px;
    line-height: 32px;
`;

export const PostBottom = styled.section`
    width: 100%;
    padding-bottom: 50px;
`;