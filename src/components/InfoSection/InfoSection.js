import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from '../../globalStyles';
import {
    InfoSec,
    InfoRow,
    InfoColumn,
    InfoButton,
    TextWrapper,
    TopLine,
    Heading,
    Subtitle,
    ImgWrapper,
    Img
} from './InfoSection.elements';

const infoSection = ({
    primary,
    showButton,
    lightBg,
    imgStart,
    lightTopLine,
    lightTextDesc,
    buttonLabel,
    description,
    headLine,
    lightText,
    topLine,
    img,
    alt,
    start }) => {
    return (
        <>
            <InfoSec lightBg={lightBg}>
                <Container>
                    <InfoRow imgStart={imgStart}>

                        <InfoColumn>
                            <TextWrapper>
                                <TopLine lightTopLine={lightTopLine}>{topLine}</TopLine>
                                <Heading lightText={lightText}>{headLine}</Heading>
                                <Subtitle lightTextDesc={lightTextDesc}>{description}</Subtitle>
                                <Link to="/">
                                    <InfoButton showButton={showButton} big fontBig primary={primary}>{buttonLabel}</InfoButton>
                                </Link>
                            </TextWrapper>
                        </InfoColumn>

                        <InfoColumn>
                            <ImgWrapper start={start}>
                                <Img src={img} alt={alt} />
                            </ImgWrapper>
                        </InfoColumn>

                    </InfoRow>
                </Container>
            </InfoSec>
        </>
    )
}

export default infoSection
