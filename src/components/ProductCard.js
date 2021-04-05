import React from 'react';
import styled from 'styled-components';
import stdStyles from '../stdStyles';

const ProductCardContainer = styled.div`
    text-align: center;
    max-width: ${(props) => props.maxWidth}rem;
    margin: 1rem;
    color: ${stdStyles.colors.secTwo};
`;

const ProductImg = styled.img`
    width: 80%;
`;

const ProductTitle = styled.h3``;

const ProductPrice = styled.p``;

const ProductCard = ({ productImg, title, price, maxWidth }) => {
    return (
        <ProductCardContainer maxWidth={maxWidth}>
            <ProductImg src={productImg}></ProductImg>
            <ProductTitle>{title}</ProductTitle>
            <ProductPrice>${price}</ProductPrice>
        </ProductCardContainer>
    );
};

export default ProductCard;
