import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from 'react-router-dom';

const StyledSettingPanelButton = styled.div`
.settingsPanel__link {
    font-size: 1.2rem;
    padding: .5rem;
    width: 4rem;
    height: 4rem;
    text-decoration: none;
    color: lightgrey;
    display: grid;
    align-content: center;
    transition: all .2s linear;
    border-radius: 50%;
    
    &:hover,
    &--active{
        color: whitesmoke;
        background-color: #323232;
    }
    
    &--icon {
        width: 100%;
        font-size: 2.5rem;
    }
    `


const SettingPanelButton = (props) => {
    return (
        <StyledSettingPanelButton>
            <NavLink className='settingsPanel__link' activeClassName='settingsPanel__link--active' exact to={props.pathname}>
                <FontAwesomeIcon className='settingsPanel__link--icon' icon={props.icon} />
            </NavLink>
        </StyledSettingPanelButton>);
}

export default SettingPanelButton;