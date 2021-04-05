import React from 'react';
import styled from 'styled-components';
import stdStyles from '../stdStyles';

const NavbarContainer = styled.div`
    height: 3.5rem;
    width: 100%;
    background-color: #273043;
    position: sticky;
    top: 0px;
    z-index: 2;
`;

const OptionsHolder = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
`;

const NavOption = styled.a`
    cursor: pointer;
    color: ${stdStyles.colors.secTwo};
    font-size: 1.1rem;
`;

const Navbar = ({ setActivePage }) => {
    const setPage = (string) => {
        setActivePage(string);
    };

    return (
        <NavbarContainer>
            <OptionsHolder>
                <NavOption onClick={() => setPage('home')}>Home</NavOption>
                <NavOption onClick={() => setPage('art')}>Art</NavOption>
                <NavOption onClick={() => setPage('crystal')}>
                    Crystals
                </NavOption>
                <NavOption onClick={() => setPage('contact')}>
                    Contact
                </NavOption>
            </OptionsHolder>
        </NavbarContainer>
    );
};

export default Navbar;
