import React from 'react';
import styled from 'styled-components';
import SectionIntro from './SectionIntro';
import stdStyles from '../stdStyles';

const SectionContainer = styled.div`
    margin: ${stdStyles.mt} auto 0 auto;
    width: 90%;
`;

const Section = ({ title, content }) => {
    return (
        <SectionContainer>
            <SectionIntro title={title}></SectionIntro>
            {content}
        </SectionContainer>
    );
};

export default Section;
