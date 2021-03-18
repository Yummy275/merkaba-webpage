import React from 'react';
import styled from 'styled-components';
import heroImg from '../images/hero-img.jpg';

const HomeHeaderContainer = styled.div``;

const HeroBgImg = styled.div`
    height: 15rem;
    display: flex;
    align-items: center;
    background-image: url(${heroImg});
    background-size: 100% 100%;
`;

const BlackBg = styled.div`
    width: 100%;
    height: 5rem;
    display: flex;
    align-items: center;
    background-color: #00000094;
    padding: 1rem;
`;

const Words = styled.h1`
    color: #ffeaec;
`;

const HomeHeader = () => {
    return (
        <HomeHeaderContainer>
            <HeroBgImg>
                <BlackBg>
                    <Words>Art {'&'} Crystals </Words>
                </BlackBg>
            </HeroBgImg>
        </HomeHeaderContainer>
    );
};

export default HomeHeader;
