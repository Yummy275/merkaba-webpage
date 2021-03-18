import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
`;

const CardImg = styled.img`
    width: 100%;
`;

const CardTitle = styled.h3``;

const CardBody = styled.p``;

const Card = () => {
    return (
        <CardContainer>
            <CardImg src="https://www.placecage.com/c/400/300"></CardImg>
            <CardTitle>Example</CardTitle>
            <CardBody>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque commodo ipsum in tellus varius, non vestibulum mi
                efficitur.
            </CardBody>
        </CardContainer>
    );
};

export default Card;
