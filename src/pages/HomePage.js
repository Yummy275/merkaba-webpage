import React from 'react';
import styled from 'styled-components';
import HomeHeader from '../components/HomeHeader';
import Card from '../components/Card';

const CardsHolder = styled.div``;

const HomePage = () => {
    return (
        <>
            <HomeHeader></HomeHeader>
            <CardsHolder>
                <Card></Card>
                <Card></Card>
                <Card></Card>
            </CardsHolder>
        </>
    );
};

export default HomePage;
