import React from 'react';
import styled from 'styled-components';
import SettingsPanelButton from './SettingPanelButton';
import { faSignInAlt, faCogs, faUserCog } from "@fortawesome/free-solid-svg-icons";

const StyledSettingsPanel = styled.div`
width: 100%;
grid-area: settingsPanel;
background-color: black;
color: white;
min-width: 15rem;
max-width: 30rem;
display: flex;
justify-content: space-around;
`

const settingPanelButtons = [
    { pathname: '/settings', text: 'settings', icon: faCogs },
    { pathname: '/user', text: 'user', icon: faUserCog },
    { pathname: '/logout', text: 'logout', icon: faSignInAlt }
]

const SettingsPanel = (props) => {
    return (
        <StyledSettingsPanel>
            {settingPanelButtons.map((button) => (
                //add props from sideNavButtons array
                <SettingsPanelButton key={`settingPanelButton__${button.text}`} text={button.text} icon={button.icon} pathname={button.pathname} />
            ))}
        </StyledSettingsPanel>);
}

export default SettingsPanel;