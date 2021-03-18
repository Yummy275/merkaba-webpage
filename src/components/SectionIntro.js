import React from 'react';
import styled from 'styled-components';
import stdStyles from '../stdStyles';

const IntroContainer = styled.div`
    width: 100%;
    margin: ${stdStyles.mt} auto 0 auto;
    border-bottom: 3px solid #273043;
`;

const SecTitle = styled.h2`
    padding-left: 2.5rem;
`;

const SectionIntro = ({ title }) => {
    return (
        <IntroContainer>
            <SecTitle>{title}</SecTitle>
        </IntroContainer>
    );
};

export default SectionIntro;
