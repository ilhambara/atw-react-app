import React from 'react';
import { FaGithub, FaInstagram, FaTwitter, FaLink } from 'react-icons/fa'
import { Button } from '../../globalStyles';
import {
    FooterContainer,
    FooterSubscription,
    FooterSubHeading,
    FooterSubText,
    Form,
    FormInput,
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterLinksItems,
    FooterLinkTitle,
    FooterLink,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    WebsiteRights,
    SocialIcons,
    SocialIconLink,
    SocialIcon
} from './Footer.elements';

const Footer = () => {
    return (
        <FooterContainer>
            <FooterSubscription>
                <FooterSubHeading>
                    Group up with the other loyal troopers by subscribing our Newsletter
                </FooterSubHeading>
                <FooterSubText></FooterSubText>
                <Form>
                    <FormInput name='email' type='email' placeholder='Your Email Here' />
                    <Button fontBig primary>Subscribe</Button>
                </Form>
            </FooterSubscription>

            <FooterLinksContainer>
                <FooterLinksWrapper>
                    <FooterLinksItems>
                        <FooterLinkTitle>About Us</FooterLinkTitle>
                        <FooterLink to='/'>Who and Why</FooterLink>
                        <FooterLink to='/'>Testimonials</FooterLink>
                        <FooterLink to='/'>Inspiration</FooterLink>
                    </FooterLinksItems>

                    <FooterLinksItems>
                        <FooterLinkTitle>Policies</FooterLinkTitle>
                        <FooterLink to='/'>Terms</FooterLink>
                        <FooterLink to='/'>Privacy</FooterLink>
                        <FooterLink to='/'>Guidelines</FooterLink>
                        <FooterLink to='/'>Acknowledgements</FooterLink>
                        <FooterLink to='/'>Licenses</FooterLink>
                    </FooterLinksItems>
                </FooterLinksWrapper>

                <FooterLinksWrapper>
                    <FooterLinksItems>
                        <FooterLinkTitle>Resources</FooterLinkTitle>
                        <FooterLink to='/'>Support</FooterLink>
                        <FooterLink to='/'>Feedback</FooterLink>
                        <FooterLink to='/'>Partners</FooterLink>
                        <FooterLink to='/'>Developers</FooterLink>
                        <FooterLink to='/'>Open Source</FooterLink>
                        <FooterLink to='/'>Security</FooterLink>
                    </FooterLinksItems>

                    <FooterLinksItems>
                        <FooterLinkTitle>Social Media</FooterLinkTitle>
                        <FooterLink to='/'>Github</FooterLink>
                        <FooterLink to='/'>Instagram</FooterLink>
                        <FooterLink to='/'>Twitter</FooterLink>
                        <FooterLink to='/'>Website</FooterLink>
                    </FooterLinksItems>
                </FooterLinksWrapper>
            </FooterLinksContainer>

            <SocialMedia>
                <SocialMediaWrap>
                    <SocialLogo to="/">
                        <SocialIcon /> Mortimer
                    </SocialLogo>
                    <WebsiteRights>Mortimer © 2020—present</WebsiteRights>
                    <SocialIcons>
                        <SocialIconLink href={'https://github.com/ilhambara'} target="_blank" aria-label="Github" rel="noopener noreferrer">
                            <FaGithub />
                        </SocialIconLink>
                        <SocialIconLink href={'https://www.instagram.com/ilham.bara'} target="_blank" aria-label="Instagram" rel="noopener noreferrer">
                            <FaInstagram />
                        </SocialIconLink>
                        <SocialIconLink href={'https://twitter.com/zgve679jdv'} target="_blank" aria-label="Twitter" rel="noopener noreferrer">
                            <FaTwitter />
                        </SocialIconLink>
                        <SocialIconLink href={'https://barathrum.me'} target="_blank" aria-label="Website" rel="noopener noreferrer">
                            <FaLink />
                        </SocialIconLink>
                    </SocialIcons>
                </SocialMediaWrap>
            </SocialMedia>
        </FooterContainer>
    )
}

export default Footer
