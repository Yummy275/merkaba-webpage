import React from 'react';
import styled from 'styled-components';
import ProductCard from '../components/ProductCard';
import stdStyles from '../stdStyles';

const Container = styled.div`
    @media (min-width: 1240px) {
        display: flex;
    }
`;

const CrystalProductsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
`;

const WordsBox = styled.div`
    text-align: center;
    padding: 2rem;
    @media (min-width: 1240px) {
        width: 35%;
    }
`;

const Words = styled.p`
    color: ${stdStyles.colors.secTwo};
`;

const CrystalPage = () => {
    return (
        <Container>
            <WordsBox>
                <Words>
                    Occaecat consequat proident minim irure. Veniam mollit minim
                    sit dolor qui reprehenderit eiusmod aliqua nulla in elit
                    fugiat laborum qui. Quis enim ut occaecat irure proident
                    velit duis sunt officia dolore commodo dolor sint culpa.
                    Cupidatat ea mollit sunt eu aute est proident aute non
                    laborum ex culpa. Sunt et quis dolor dolor quis labore
                    aliqua labore commodo esse. Magna laboris velit ipsum eu
                    aliqua labore voluptate exercitation velit enim.
                </Words>
            </WordsBox>
            <CrystalProductsContainer>
                <ProductCard
                    productImg="https://www.placecage.com/c/1400/1000"
                    title="Example"
                    price="10.99"
                    maxWidth="20"
                ></ProductCard>
                <ProductCard
                    productImg="https://www.placecage.com/g/1400/1000"
                    title="Example"
                    price="10.99"
                    maxWidth="20"
                ></ProductCard>
                <ProductCard
                    productImg="https://www.placecage.com/g/1400/1000"
                    title="Example"
                    price="12.99"
                    maxWidth="20"
                ></ProductCard>
                <ProductCard
                    productImg="https://www.placecage.com/c/1400/1000"
                    title="Example"
                    price="10.99"
                    maxWidth="20"
                ></ProductCard>
                <ProductCard
                    productImg="https://www.placecage.com/1400/1000"
                    title="Example"
                    price="10.99"
                    maxWidth="20"
                ></ProductCard>
                <ProductCard
                    productImg="https://www.placecage.com/g/1400/1000"
                    title="Example"
                    price="10.99"
                    maxWidth="20"
                ></ProductCard>
                <ProductCard
                    productImg="https://www.placecage.com/g/1400/1000"
                    title="Example"
                    price="40.99"
                    maxWidth="20"
                ></ProductCard>
                <ProductCard
                    productImg="https://www.placecage.com/g/1400/1000"
                    title="Example"
                    price="1.99"
                    maxWidth="20"
                ></ProductCard>
                <ProductCard
                    productImg="https://www.placecage.com/g/1400/1000"
                    title="Example"
                    price="7.99"
                    maxWidth="20"
                ></ProductCard>
            </CrystalProductsContainer>
        </Container>
    );
};

export default CrystalPage;
