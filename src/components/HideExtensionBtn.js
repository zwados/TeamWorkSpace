import React from 'react';
import styled from 'styled-components';
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const StyledHideExtensionBtn = styled.div`
border-radius: 50%;
background-color: #212121;
color: lightgrey;
font-size: 3rem;
height: 3.5rem;
width: 3.5rem;
position: absolute;
display: flex;
justify-content: center;
align-items: center;
top: 2rem;
right: 0;
transform: translateX(50%);
transition: all .2s linear;
&:hover {
    color: whitesmoke;
    background-color: #323232;
}
`

const HideExtensionBtn = (props) => {
    return (
        <StyledHideExtensionBtn>
            <FontAwesomeIcon icon={faAngleLeft} onClick={props.handleDisplay} />
        </StyledHideExtensionBtn>);
}

export default HideExtensionBtn;