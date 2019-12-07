import styled from 'styled-components';
import React, { useState } from 'react';
import NavExentension from './NavExtension';

const StyledMain = styled.main`
grid-area: main;
background-color: whitesmoke;
display: grid;
grid-template-columns: 25rem 1fr;
grid-template-areas:
'navExtension mainContent';
${props => props.isVisible ? `grid-template-columns: 25rem 1fr;` : `grid-template-columns: 2rem 1fr;`}
`;

const Main = () => {

    const [isNavExtended, setNavExtended] = useState(true);
    const handleNavDisplay = () => {
        setNavExtended(!isNavExtended);
    }

    return (
        <StyledMain isVisible={isNavExtended}>
            <NavExentension handleDisplay={handleNavDisplay} />
        </StyledMain>);
}

export default Main;