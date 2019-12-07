import styled from 'styled-components';
import React from 'react';
import SideNavButton from '../components/SideNavButton';
import { faHome, faTasks, faUsers, faChartLine, faProjectDiagram } from "@fortawesome/free-solid-svg-icons";


const StyledSideNav = styled.nav`
grid-area: sidenav;
background-color: #212121;
height: 100vh;
box-shadow: .2rem .1rem .5rem #343434;
position: relative;
z-index: 1000;
`;

//change values below to amend rendered SideNav Buttons
const sideNavButtons = [
    { pathname: '/', text: 'main', icon: faHome },
    { pathname: '/team', text: 'team', icon: faUsers },
    { pathname: '/activities', text: 'activities', icon: faTasks },
    { pathname: '/projects', text: 'projects', icon: faProjectDiagram },
    { pathname: '/statistics', text: 'statistics', icon: faChartLine }
]

const SideNav = () => {
    return (
        <StyledSideNav>
            {sideNavButtons.map((button) => (
                //add props from sideNavButtons array
                <SideNavButton key={`sideNavBtn__${button.text}`} text={button.text} icon={button.icon} pathname={button.pathname} />
            ))}
        </StyledSideNav>);
}

export default SideNav;