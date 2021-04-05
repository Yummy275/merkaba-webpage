import React from 'react';
import styled from 'styled-components';
import stdStyles from '../stdStyles';
import fbImg from '../images/icons/facebook-icon.png';
import instaImg from '../images/icons/insta-icon.png';
import twitterImg from '../images/icons/twitter-icon.png';

const Bottom = styled.div`
    width: 100%;
    height: 3.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #273043;
`;

const IconsHolder = styled.div`
    width: 90%;
    max-width: 50rem;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
`;

const LinkToMedia = styled.a`
    display: flex;
    cursor: pointer;
`;

const BottomIcon = styled.img`
    height: 2.4rem;
    width: 2.4rem;
`;

const Footer = () => {
    return (
        <Bottom>
            <IconsHolder>
                <LinkToMedia>
                    <BottomIcon src={fbImg}></BottomIcon>
                </LinkToMedia>
                <LinkToMedia>
                    <BottomIcon src={instaImg}></BottomIcon>
                </LinkToMedia>
                <LinkToMedia>
                    <BottomIcon src={twitterImg}></BottomIcon>
                </LinkToMedia>
            </IconsHolder>
        </Bottom>
    );
};

export default Footer;
