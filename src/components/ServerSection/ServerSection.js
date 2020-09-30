import React from 'react';
import { ImPacman } from 'react-icons/im';
import { BsChatQuoteFill } from 'react-icons/bs';
import { IoLogoGameControllerB } from 'react-icons/io';
import { IconContext } from 'react-icons/lib';
import {
    ServerSection,
    ServerWrapper,
    ServerHeading,
    ServerContainer,
    ServerCard,
    ServerCardInfo,
    ServerCardIcon,
    ServerCardPlan,
    ServerCardCost,
    ServerCardLength,
    ServerCardFeatures,
    ServerCardFeature,
    ServerBgImage,
    ServerCardButton
} from './ServerSection.elements';

function Server() {
    return (
        <IconContext.Provider value={{ color: '#a9b3c1', size: 64 }}>
            <ServerBgImage xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#f6f6f6" fill-opacity="1" d="M0,320L60,282.7C120,245,240,171,360,133.3C480,96,600,96,720,117.3C840,139,960,181,1080,202.7C1200,224,1320,224,1380,224L1440,224L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path></ServerBgImage>
            <ServerSection>
                <ServerWrapper>
                    <ServerHeading>Pick Your Server</ServerHeading>
                    <ServerContainer>
                        <ServerCard>
                            <ServerCardInfo>
                                <ServerCardIcon>
                                    <IoLogoGameControllerB />
                                </ServerCardIcon>
                                <ServerCardPlan>Gaming Zone</ServerCardPlan>
                                <ServerCardCost></ServerCardCost>
                                <ServerCardLength></ServerCardLength>
                                <ServerCardFeatures>
                                    <ServerCardFeature>Best Newcomer</ServerCardFeature>
                                    <ServerCardFeature>Improve Skills</ServerCardFeature>
                                    <ServerCardFeature>Solo or Team Up</ServerCardFeature>
                                </ServerCardFeatures>
                                <ServerCardButton href={'https://discord.com/invite/VALORANT'} target="_blank" aria-label="Valorant" rel="noopener noreferrer">Let me in</ServerCardButton>
                            </ServerCardInfo>
                        </ServerCard>

                        <ServerCard>
                            <ServerCardInfo>
                                <ServerCardIcon>
                                    <ImPacman />
                                </ServerCardIcon>
                                <ServerCardPlan>Memes Room</ServerCardPlan>
                                <ServerCardCost></ServerCardCost>
                                <ServerCardLength></ServerCardLength>
                                <ServerCardFeatures>
                                    <ServerCardFeature>Memes Only</ServerCardFeature>
                                    <ServerCardFeature>Everyday Memes</ServerCardFeature>
                                    <ServerCardFeature>Sometimes Cringe</ServerCardFeature>
                                </ServerCardFeatures>
                                <ServerCardButton href={'https://discord.com/invite/G5yBpd4'} target="_blank" aria-label="MidOrMeepo" rel="noopener noreferrer">Let me in</ServerCardButton>
                            </ServerCardInfo>
                        </ServerCard>

                        <ServerCard>
                            <ServerCardInfo>
                                <ServerCardIcon>
                                    <BsChatQuoteFill />
                                </ServerCardIcon>
                                <ServerCardPlan>Chat Lounge</ServerCardPlan>
                                <ServerCardCost></ServerCardCost>
                                <ServerCardLength></ServerCardLength>
                                <ServerCardFeatures>
                                    <ServerCardFeature>Unlimited Users</ServerCardFeature>
                                    <ServerCardFeature>Chat and Talk</ServerCardFeature>
                                    <ServerCardFeature>Everyone can Join</ServerCardFeature>
                                </ServerCardFeatures>
                                <ServerCardButton href={'https://discord.com/invite/handcircus'} target="_blank" aria-label="HandCircus" rel="noopener noreferrer">Let me in</ServerCardButton>
                            </ServerCardInfo>
                        </ServerCard>
                    </ServerContainer>
                </ServerWrapper>
            </ServerSection>
        </IconContext.Provider>
    );
}
export default Server