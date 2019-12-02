import styled from 'styled-components';
import React from 'react';

const StyledFooter = styled.footer`
grid-area: footer;
background-color: pink;
`;

const Footer = () => {
    return (<StyledFooter>footer</StyledFooter>);
}

export default Footer;