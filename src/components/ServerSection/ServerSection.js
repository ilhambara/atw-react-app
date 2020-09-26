import React from 'react';
import { Button } from '../../globalStyles';
import { GiCrystalBars } from 'react-icons/gi';
import { GiCutDiamond, GiRock } from 'react-icons/gi';
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
    ServerBgImage
} from './ServerSection.elements';

function Server() {
    return (
        <IconContext.Provider value={{ color: '#a9b3c1', size: 64 }}>
            <ServerBgImage xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#f6f6f6" fill-opacity="1" d="M0,320L60,282.7C120,245,240,171,360,133.3C480,96,600,96,720,117.3C840,139,960,181,1080,202.7C1200,224,1320,224,1380,224L1440,224L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path></ServerBgImage>
            <ServerSection>
                <ServerWrapper>
                    <ServerHeading>Pick Your Server</ServerHeading>
                    <ServerContainer>
                        <ServerCard to='/sign-up'>
                            <ServerCardInfo>
                                <ServerCardIcon>
                                    <GiRock />
                                </ServerCardIcon>
                                <ServerCardPlan>Starter Pack</ServerCardPlan>
                                <ServerCardCost>$99.99</ServerCardCost>
                                <ServerCardLength>per month</ServerCardLength>
                                <ServerCardFeatures>
                                    <ServerCardFeature>100 New Users</ServerCardFeature>
                                    <ServerCardFeature>$10,000 Budget</ServerCardFeature>
                                    <ServerCardFeature>Retargeting analytics</ServerCardFeature>
                                </ServerCardFeatures>
                                <Button primary>Choose Plan</Button>
                            </ServerCardInfo>
                        </ServerCard>
                        <ServerCard to='/sign-up'>
                            <ServerCardInfo>
                                <ServerCardIcon>
                                    <GiCrystalBars />
                                </ServerCardIcon>
                                <ServerCardPlan>Gold Rush</ServerCardPlan>
                                <ServerCardCost>$299.99</ServerCardCost>
                                <ServerCardLength>per month</ServerCardLength>
                                <ServerCardFeatures>
                                    <ServerCardFeature>1000 New Users</ServerCardFeature>
                                    <ServerCardFeature>$50,000 Budget</ServerCardFeature>
                                    <ServerCardFeature>Lead Gen Analytics</ServerCardFeature>
                                </ServerCardFeatures>
                                <Button primary>Choose Plan</Button>
                            </ServerCardInfo>
                        </ServerCard>
                        <ServerCard to='/sign-up'>
                            <ServerCardInfo>
                                <ServerCardIcon>
                                    <GiCutDiamond />
                                </ServerCardIcon>
                                <ServerCardPlan>Diamond Kings</ServerCardPlan>
                                <ServerCardCost>$999.99</ServerCardCost>
                                <ServerCardLength>per month</ServerCardLength>
                                <ServerCardFeatures>
                                    <ServerCardFeature>Unlimited Users</ServerCardFeature>
                                    <ServerCardFeature>Unlimited Budget</ServerCardFeature>
                                    <ServerCardFeature>24/7 Support</ServerCardFeature>
                                </ServerCardFeatures>
                                <Button primary>Choose Plan</Button>
                            </ServerCardInfo>
                        </ServerCard>
                    </ServerContainer>
                </ServerWrapper>
            </ServerSection>
        </IconContext.Provider>
    );
}
export default Server