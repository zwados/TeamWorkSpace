import styled from 'styled-components';
import React from 'react';

const StyledSideNav = styled.nav`
grid-area: sidenav;
background-color: #212121;
height: 100vh;
box-shadow: .2rem .1rem .5rem #343434;
position: relative;
z-index: 1000;
color: white;
`;

const SideNav = () => {
    return (<StyledSideNav>
        styled side nav
    </StyledSideNav>);
}

export default SideNav;