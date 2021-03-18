import React from 'react';
import styled, { keyframes } from 'styled-components';
import heroImg from '../images/hero-img.jpg';

const HomeHeaderContainer = styled.div``;

const HeroBgImg = styled.div`
    height: 15rem;
    display: flex;
    align-items: center;
    background-image: url(${heroImg});
    background-size: 100% 100%;

    @media (min-width: 640px) {
        height: 17rem;
    }

    @media (min-width: 1024px) {
        height: 20rem;
    }
`;

const BlackBg = styled.div`
    width: 100%;
    height: 6rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #00000094;
    padding: 1rem;
    text-align: center;
`;

const moveIn = keyframes`
    from {
        opacity: 0;
        transform: translate(-35px, 15px)
    }
    to {
        opacity: 1;
        transform: translate(0);
    }
`;

const WordsBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    opacity: 0;
    animation: ${moveIn} 0.5s ease-in 0.3s forwards;
`;

const Words = styled.h1`
    margin-bottom: 0.25rem;
    color: #ffeaec;
`;

const SubWords = styled.p`
    margin-top: 0.25rem;
    color: #ffeaec;
`;

const HomeHeader = () => {
    return (
        <HomeHeaderContainer>
            <HeroBgImg>
                <BlackBg>
                    <WordsBox>
                        <Words>Art {'&'} Crystals </Words>
                        <SubWords>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit.
                        </SubWords>
                    </WordsBox>
                </BlackBg>
            </HeroBgImg>
        </HomeHeaderContainer>
    );
};

export default HomeHeader;
