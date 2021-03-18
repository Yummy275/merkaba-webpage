import React from 'react';
import styled from 'styled-components';

const CarouselContainer = styled.div`
    width: 90%;
`;

const Window = styled.div``;

const Carousel = () => {
    return (
        <CarouselContainer>
            <Window></Window>
        </CarouselContainer>
    );
};

export default Carousel;
