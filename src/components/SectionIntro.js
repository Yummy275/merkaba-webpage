import React from 'react';
import styled from 'styled-components';
import stdStyles from '../stdStyles';

const IntroContainer = styled.div`
    width: 100%;
    border-bottom: 3px solid ${stdStyles.colors.secOne};
`;

const SecTitle = styled.h2`
    color: ${stdStyles.colors.secTwo};
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
