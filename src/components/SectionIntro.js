import React from 'react';
import styled from 'styled-components';
import stdStyles from '../stdStyles';

const IntroContainer = styled.div`
    width: 90%;
    margin: ${stdStyles.mt} auto 0 auto;
    border-bottom: 3px solid #273043;
`;

const SecTitle = styled.h2`
    padding-left: 2.75rem;
`;

const SectionIntro = ({ title }) => {
    return (
        <IntroContainer>
            <SecTitle>{title}</SecTitle>
        </IntroContainer>
    );
};

export default SectionIntro;
