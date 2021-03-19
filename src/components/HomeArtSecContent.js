import React from 'react';
import styled from 'styled-components';
import StdBtn from './StdBtn';
import Carousel from './Carousel';
import stdStyles from '../stdStyles';

const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: ${stdStyles.mt};
`;

const HomeArtSecContent = () => {
    return (
        <ContentContainer>
            <Carousel
                imagesSrc={[
                    'https://www.placecage.com/1400/1000',
                    'https://www.placecage.com/g/1400/1000',
                    'https://www.placecage.com/c/1400/1000',
                    'https://www.placecage.com/c/1400/1000',
                    'https://www.placecage.com/g/1400/1000',
                ]}
            ></Carousel>
            <StdBtn width="14">Explore More</StdBtn>
        </ContentContainer>
    );
};

export default HomeArtSecContent;
