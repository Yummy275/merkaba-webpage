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

const ContactPage = () => {
    return (
        <Container>
            <ContactInfoBox>
                <h3>Contact Me</h3>
                <p>Email: example@gmail.com</p>
                <p>Text/Call: 555-555-5555</p>
            </ContactInfoBox>
        </Container>
    );
};

export default ContactPage;
