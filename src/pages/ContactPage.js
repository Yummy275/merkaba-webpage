import React from 'react';
import styled from 'styled-components';
import bg from '../images/contactImg.jpg';
import stdStyles from '../stdStyles';

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url(${bg});
    background-size: 100% 100%;
    background-position: center;
    height: 86vh;
    color: ${stdStyles.colors.secTwo};
`;

const ContactInfoBox = styled.div`
    text-align: center;
`;

const Title = styled.h3`
    margin: 0.5rem 0;
`;

const Word = styled.p`
    margin: 0.25rem 0;
`;

const ContactPage = () => {
    return (
        <Container>
            <ContactInfoBox>
                <Title>Contact Me</Title>
                <Word>Email: example@gmail.com</Word>
                <Word>Text/Call: 555-555-5555</Word>
                <Title>Social Media</Title>
            </ContactInfoBox>
        </Container>
    );
};

export default ContactPage;
