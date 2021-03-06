import styled from 'styled-components';

export const InfoSec = styled.div`
    color: #fff;
    padding: 120px 0;
    background: ${({ lightBg }) => (lightBg ? '#fff' : '#101522')};
    height: 100vh;

    @media screen and (max-width: 768px) {
        padding: 50px 0;
    }
`;

export const InfoRow = styled.div`
    display: flex;
    margin: 0 -15px -15px -15px;
    flex-wrap: wrap;
    align-items: center;
    flex-direction: ${({ imgStart }) => (imgStart ? 'row-reverse' : 'row')};
`;

export const InfoColumn = styled.div`
    margin-bottom: 15px;
    padding-right: 15px;
    padding-left: 15px;
    flex: 1;
    max-width: 50%;
    flex-basis: 50%;

    @media screen and (max-width: 768px) {
        max-width: 100%;
        flex-basis: 100%;
        display: flex;
        justify-content: center;
    }
`;

export const TextWrapper = styled.div`
    max-width: 480px;
    padding-top: 0;
    padding-bottom: 60px;

    @media screen and (max-width: 768px) {
        padding-bottom: 35px;
    }
`;

export const TopLine = styled.div`
    color: ${({ lightTopLine }) => (lightTopLine ? '#a9b3c1' : '#4b59f7')};
    font-size: 18px;
    line-height: 16px;
    letter-spacing: 1.4px;
    margin-bottom: 16px;
`;

export const Heading = styled.h1`
    margin-bottom: 24px;
    font-size: 48px;
    font-weight: 700;
    line-height: 120%;
    color: ${({ lightText }) => (lightText ? '#f7f8fa' : '#23272a')};

    @media screen and (max-width: 960px) {
     font-size: 36px;
  }
`;

export const Subtitle = styled.p`
    
    margin-bottom: 35px;
    padding: 0;
    font-family: 'Roboto', sans-serif;
    font-weight: 300;
    font-size: 20px;
    line-height: 32px;
    color: ${({ lightTextDesc }) => (lightTextDesc ? '#a9b3c1' : '#23272a')};
`;

export const ImgWrapper = styled.div`
    max-width: 555px;
    display: flex;
    justify-content: ${({ start }) => (start ? 'flex-start' : 'flex-end')};

    @media screen and (max-width: 768px) {
        justify-content: center;
    }
`;

export const Img = styled.img`
    padding-right: 0;
    border: 0;
    max-width: 90%;
    vertical-align: middle;
    display: inline-block;
    max-height: 500px;
`;

export const InfoButton = styled.button`
    border-radius: 4px;
    background: ${({ primary }) => (primary ? '#4b59f7' : '#0467fb')};
    white-space: nowrap;
    padding: ${({ big }) => (big ? '12px 64px' : '10px 20px')};
    color: #fff;
    font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
    outline: none;
    border: none;
    cursor: pointer;
    display: ${({ showButton }) => (showButton ? '' : 'none')};

&:hover {
    transition: all 0.3s ease-out;
    background: #fff;
    background: ${({ primary }) => (primary ? '#0467fb' : '#4b59f7')};
}

@media screen and (max-width: 960px) {
    width: 100%;
}
`;