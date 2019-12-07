import styled from 'styled-components';
import React from 'react';
import Logo from '../components/Logo';
import SettingsPanel from '../components/SettingsPanel';

const StyledNav = styled.nav`
grid-area: nav;
background-color: black;
color: white;
display: grid;
align-items: center;
box-shadow: 0 .1rem .25rem #343434;
position: relative;
z-index: 1500;
grid-template-columns: 1rem 1fr auto 1rem;
grid-template-areas: 
'gap logo settingsPanel';
`;

const Nav = () => {
    return (
        <StyledNav>
            <Logo />
            <SettingsPanel />
        </StyledNav>);
}

export default Nav;