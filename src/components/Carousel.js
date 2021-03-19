import React from 'react';
import styled from 'styled-components';

const CarouselContainer = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
`;

const Window = styled.div`
    overflow: hidden;
`;

const ImagesHolder = styled.div`
    display: flex;
    justify-content: flex-start;
    width: fit-content;
`;

const CarouselImage = styled.img`
    width: 100%;
`;

const BtnsContainer = styled.div`
    display: flex;
    position: absolute;
    bottom: 30px;
`;

const CarouselBtn = styled.button`
    border-radius: 50%;
    height: 0.5rem;
    width: 0.5rem;
    margin: 0 0.25rem;
    border: none;
    background-color: #8b8b8b;
`;

const Carousel = ({ imagesSrc }) => {
    const carouselImagesArr = [];

    for (var i = 0; i < imagesSrc.length; i++) {
        carouselImagesArr.push(
            <CarouselImage key={i} src={imagesSrc[i]}></CarouselImage>
        );
    }

    return (
        <CarouselContainer>
            <Window>
                <ImagesHolder>{carouselImagesArr}</ImagesHolder>
            </Window>
            <BtnsContainer>
                <CarouselBtn></CarouselBtn>
                <CarouselBtn></CarouselBtn>
                <CarouselBtn></CarouselBtn>
            </BtnsContainer>
        </CarouselContainer>
    );
};

export default Carousel;
