import React from 'react';
import styled from 'styled-components';
import HomeHeader from '../components/HomeHeader';
import Card from '../components/Card';
import Section from '../components/Section';
import HomeArtSecContent from '../components/HomeArtSecContent';
import Footer from '../components/Footer';
import stdStyles from '../stdStyles';

const CardsHolder = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    margin-top: ${stdStyles.mt};
`;

const HomePage = () => {
    return (
        <>
            <HomeHeader></HomeHeader>
            <CardsHolder>
                <Card></Card>
                <Card></Card>
                <Card></Card>
            </CardsHolder>
            <Section
                title="Art"
                content={<HomeArtSecContent></HomeArtSecContent>}
            ></Section>
            <Section title="Crystals"></Section>
            <Section title="Services"></Section>
            <Footer></Footer>
        </>
    );
};

export default HomePage;
