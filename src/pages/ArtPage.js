import React from 'react';
import styled from 'styled-components';
import ProductCard from '../components/ProductCard';

const ProductsCardContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;

const ArtPage = () => {
    return (
        <ProductsCardContainer>
            <ProductCard
                productImg="https://www.placecage.com/g/1400/1000"
                title="Example example"
                price="100"
                maxWidth="36"
            ></ProductCard>
            <ProductCard
                productImg="https://www.placecage.com/g/1400/1000"
                title="Example example"
                price="100"
                maxWidth="36"
            ></ProductCard>
            <ProductCard
                productImg="https://www.placecage.com/c/1400/1000"
                title="Example example"
                price="250"
                maxWidth="36"
            ></ProductCard>
            <ProductCard
                productImg="https://www.placecage.com/1400/1000"
                title="Example example"
                price="300"
                maxWidth="36"
            ></ProductCard>
        </ProductsCardContainer>
    );
};

export default ArtPage;
