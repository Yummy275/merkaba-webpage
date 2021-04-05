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
    color: ${(props) =>
        props.name === props.activePage
            ? stdStyles.colors.mainTwo
            : stdStyles.colors.secTwo};
    font-size: 1.1rem;
    transition: transform 0.2s ease-in;
    ${(props) =>
        props.name === props.activePage
            ? 'transform: scale(1.2);'
            : `:hover {
                transform: scale(1.2);
            }`}
`;

const Navbar = ({ setActivePage, activePage }) => {
    const setPage = (string) => {
        window.scrollTo(0, 0);
        setActivePage(string);
    };

    return (
        <NavbarContainer>
            <OptionsHolder>
                <NavOption
                    name="home"
                    activePage={activePage}
                    onClick={() => setPage('home')}
                >
                    Home
                </NavOption>
                <NavOption
                    name="art"
                    activePage={activePage}
                    onClick={() => setPage('art')}
                >
                    Art
                </NavOption>
                <NavOption
                    name="crystal"
                    activePage={activePage}
                    onClick={() => setPage('crystal')}
                >
                    Crystals
                </NavOption>
                <NavOption
                    name="contact"
                    activePage={activePage}
                    onClick={() => setPage('contact')}
                >
                    Contact
                </NavOption>
            </OptionsHolder>
        </NavbarContainer>
    );
};

export default Navbar;
