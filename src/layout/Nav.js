import styled from 'styled-components';
import React from 'react';
import Logo from '../components/Logo';

const StyledNav = styled.nav`
grid-area: nav;
background-color: black;
color: white;
display: grid;
align-items: center;
box-shadow: 0 .1rem .25rem #343434;
position: relative;
`;

const Nav = () => {
    return (
        <StyledNav>
            <Logo />
        </StyledNav>);
}

export default Nav;