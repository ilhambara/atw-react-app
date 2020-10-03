import { } from 'react-router-dom';
import styled from 'styled-components';


export const PostWrapper = styled.div`
    padding: 50px 0;

    @media screen and (max-width: 960px) {
        padding: 25px 0;
    }
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
    margin-bottom: 10px;

    @media screen and (max-width: 960px) {
        font-size: 26px;
    }
`;

export const PostDate = styled.h3`
    padding: 10px 0;
    font-weight: 100;
`;

export const PostImage = styled.img`
    width: 100%;
    max-width: 540px;
    padding: 20px 0 10px 0;
`;

export const PostArticle = styled.p`
    width: 100%;
    max-width: 1000px;
    font-size: 18px;
    line-height: 28px;
    color: #303438;
`;

export const PostBottom = styled.hr`
    width: 100%;
`;