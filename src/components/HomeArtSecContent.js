import React from 'react';
import styled from 'styled-components';
import StdBtn from './StdBtn';

const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const HomeArtSecContent = () => {
    return (
        <ContentContainer>
            <StdBtn width="14">Explore More</StdBtn>
        </ContentContainer>
    );
};

export default HomeArtSecContent;
