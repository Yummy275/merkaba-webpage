import React from 'react';
import styled from 'styled-components';

const NavbarContainer = styled.div`
    height: 3.5rem;
    width: 100%;
    background-color: #273043;
    position: sticky;
`;

const OptionsHolder = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
`;

const NavOption = styled.a`
    color: #ffeaec;
    font-size: 1.1rem;
`;

const Navbar = () => {
    return (
        <NavbarContainer>
            <OptionsHolder>
                <NavOption>Home</NavOption>
                <NavOption>Art</NavOption>
                <NavOption>Crystals</NavOption>
                <NavOption>Contact</NavOption>
            </OptionsHolder>
        </NavbarContainer>
    );
};

export default Navbar;
