import React from 'react';
import styled from 'styled-components';

const ProductCardContainer = styled.div`
    text-align: center;
`;

const ProductImg = styled.img`
    width: 80%;
`;

const ProductTitle = styled.h3``;

const ProductPrice = styled.p``;

const ProductCard = ({ productImg, title, price }) => {
    return (
        <ProductCardContainer>
            <ProductImg src={productImg}></ProductImg>
            <ProductTitle>{title}</ProductTitle>
            <ProductPrice>${price}</ProductPrice>
        </ProductCardContainer>
    );
};

export default ProductCard;
