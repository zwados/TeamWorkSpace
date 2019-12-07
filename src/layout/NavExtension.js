import styled from 'styled-components';
import React from 'react';
import HideExtensionBtn from '../components/HideExtensionBtn';


const StyledNavExtension = styled.div`
grid-area: navExtension;
background-color: #cecece;
height: 100vh;
box-shadow: .2rem .1rem .5rem #787878;
position: relative;
z-index: 500;
color: white;
`;

const NavExtension = (props) => {
    return (
        <StyledNavExtension>
            <HideExtensionBtn handleDisplay={props.handleDisplay} />
        </StyledNavExtension>);
}

export default NavExtension;