import React from 'react';
import styled from 'styled-components';
import StdBtn from './StdBtn';
import stdStyles from '../stdStyles';

const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem;
    margin-top: ${stdStyles.mt};
`;

const IntroWords = styled.p`
    color: ${stdStyles.colors.secTwo};
`;

const CrystalRow = styled.div`
    display: flex;
    margin-top: ${stdStyles.mt};
    flex-wrap: wrap;
    justify-content: space-evenly;
`;

const CrystalImg = styled.img`
    width: 40%;
    max-width: 20rem;
    margin: 0.25rem 0.25rem;
`;

const HomeCrystalSecContect = () => {
    return (
        <ContentContainer>
            <IntroWords>
                Veniam veniam Lorem ullamco ad adipisicing in anim. Quis eiusmod
                reprehenderit nostrud reprehenderit exercitation fugiat
                excepteur ipsum cillum. Laboris aliquip do voluptate id
                consequat sit ut sunt voluptate consectetur magna commodo.
                Deserunt incididunt enim nostrud eu qui sint commodo commodo
                fugiat amet do adipisicing sit sunt. Laboris consequat
                adipisicing ea consectetur duis. Et officia anim deserunt
                nostrud. Labore fugiat qui deserunt magna eiusmod sint cillum
                proident.
            </IntroWords>
            <CrystalRow>
                <CrystalImg src="https://www.placecage.com/1000/1000"></CrystalImg>
                <CrystalImg src="https://www.placecage.com/1000/1000"></CrystalImg>
                <CrystalImg src="https://www.placecage.com/1000/1000"></CrystalImg>
                <CrystalImg src="https://www.placecage.com/1000/1000"></CrystalImg>
                <CrystalImg src="https://www.placecage.com/1000/1000"></CrystalImg>
                <CrystalImg src="https://www.placecage.com/1000/1000"></CrystalImg>
            </CrystalRow>
            <StdBtn width="10">View More</StdBtn>
        </ContentContainer>
    );
};

export default HomeCrystalSecContect;
