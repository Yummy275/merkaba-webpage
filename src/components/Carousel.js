import React, { useRef } from 'react';
import styled from 'styled-components';

const CarouselContainer = styled.div`
    position: relative;
    max-width: 45rem;
    display: flex;
    justify-content: center;
    padding: 1rem 0;
`;

const Window = styled.div`
    overflow: hidden;
`;

const ImagesHolder = styled.div`
    display: flex;
    justify-content: flex-start;
    width: fit-content;
    transition: transform 0.3s ease-in;
`;

const CarouselImage = styled.img`
    min-height: 18rem;
    width: 100%;
`;

const BtnsContainer = styled.div`
    display: flex;
    position: absolute;
    bottom: 35px;
`;

const CarouselBtn = styled.button`
    cursor: pointer;
    border-radius: 50%;
    height: 0.5rem;
    width: 0.5rem;
    margin: 0 0.5rem;
    border: none;
    background-color: #8b8b8b;
`;

const Carousel = ({ imagesSrc }) => {
    const imagesHolder = useRef();

    const carouselImagesArr = [];
    const carouselButtonsArr = [];

    const updateCarouselImage = (transformAmount) => {
        imagesHolder.current.style.transform = `translateX(-${transformAmount}%)`;
    };

    for (var i = 0; i < imagesSrc.length; i++) {
        let transformPercent = 100 * i;
        carouselImagesArr.push(
            <CarouselImage key={i} src={imagesSrc[i]}></CarouselImage>
        );
        carouselButtonsArr.push(
            <CarouselBtn
                key={i}
                onClick={() => updateCarouselImage(transformPercent)}
            ></CarouselBtn>
        );
    }

    return (
        <CarouselContainer>
            <Window>
                <ImagesHolder ref={imagesHolder}>
                    {carouselImagesArr}
                </ImagesHolder>
            </Window>
            <BtnsContainer>{carouselButtonsArr}</BtnsContainer>
        </CarouselContainer>
    );
};

export default Carousel;
