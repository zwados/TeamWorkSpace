import React from 'react';
import styled from 'styled-components';

const StyledLogo = styled.span`
font-size: 2.5rem;
padding: .5rem;
font-family: 'Lobster', cursive;
`


const Logo = () => {
    return (<StyledLogo>
        TeamWorkSpace
    </StyledLogo>);
}

export default Logo;