import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { Button } from '../../globalStyles'
import {
    Nav,
    NavbarContainer,
    NavLogo,
    NavIcon,
    MobileIcon,
    NavMenu,
    NavItem,
    NavLinks,
    NavHrefLinks,
    NavItemBtn,
    NavBtnLink
} from './Navbar.elements';



const Navbar = () => {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false)
        } else {
            setButton(true)
        }
    }

    useEffect(() => {
        showButton()
    }, [])

    window.addEventListener('resize', showButton);

    return (
        <>
            <IconContext.Provider value={{ color: '#fff' }}>
                <Nav>
                    <NavbarContainer>
                        <NavLogo to='/'><NavIcon />Mortimer</NavLogo>
                        <MobileIcon onClick={handleClick}>{click ? <FaTimes /> : <FaBars />}</MobileIcon>
                        <NavMenu onClick={handleClick} click={click}>
                            <NavItem>
                                <NavLinks to='/' onClick={closeMobileMenu}>Home</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to='/blogpost'>Blogpost</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to='/joinserver'>Join a Server</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavHrefLinks href={'https://realtime-chat-application.netlify.app/'} target="_blank" aria-label="Live-Chat" rel="noopener noreferrer">Live Chat</NavHrefLinks>
                            </NavItem>
                            <NavItemBtn>
                                {button ? (
                                    <NavBtnLink to='/subscribe'>
                                        <Button primary>SUBSCRIBE</Button>
                                    </NavBtnLink>
                                ) : (
                                        <NavBtnLink to='/subscribe'>
                                            <Button fontBig primary>SUBSCRIBE</Button>
                                        </NavBtnLink>
                                    )}
                            </NavItemBtn>
                        </NavMenu>
                    </NavbarContainer>
                </Nav>
            </IconContext.Provider>
        </>
    );
};

export default Navbar;
