import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const StyledSideNavBtn = styled.div`
.sideNav__link {
font-size: 1.2rem;
padding: .5rem;
width: 100%;
height: 7rem;
text-decoration: none;
color: lightgrey;
display: grid;
align-content: center;
grid-template-areas:
'icon'
'text';
transition: all .2s linear;

&:hover,
&--active{
    color: whitesmoke;
    background-color: #323232;
}

&--icon {
    grid-area: icon;
    width: 100%;
    font-size: 2.5rem;
}

&--text {
    grid-area: text;
    width: 100%;
    text-align: center;
    text-transform: uppercase;
}
}
`

const SideNavButton = (props) => {
    return (<StyledSideNavBtn>
        <NavLink className='sideNav__link' activeClassName='sideNav__link--active' exact to={props.pathname}>
            <FontAwesomeIcon className='sideNav__link--icon' icon={props.icon} />
            <span className='sideNav__link--text'>{props.text}</span>
        </NavLink>
    </StyledSideNavBtn>);
}

export default SideNavButton;