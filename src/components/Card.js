import React from 'react';
import styled from 'styled-components';
import stdStyles from '../stdStyles';

const CardContainer = styled.div`
    width: 80%;
    max-width: 20rem;
    margin: 1rem 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: ${stdStyles.boxShadow};
`;

const CardImg = styled.img`
    width: 100%;
    height: auto;
`;

const WordsHolder = styled.div`
    color: ${stdStyles.colors.secOne};
    background-color: ${stdStyles.colors.secTwo}d6;
    padding: 1rem;
`;

const CardTitle = styled.h3`
    margin-bottom: 0.5rem;
`;

const CardBody = styled.p``;

const Card = () => {
    return (
        <CardContainer>
            <CardImg src="https://www.placecage.com/g/400/300"></CardImg>
            <WordsHolder>
                <CardTitle>Example</CardTitle>
                <CardBody>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Pellentesque commodo ipsum in tellus varius, non vestibulum
                    mi efficitur.
                </CardBody>
            </WordsHolder>
        </CardContainer>
    );
};

export default Card;
