import React from 'react';
import styled from 'styled-components';
import { css, keyframes } from 'styled-components';

const rotate = keyframes`
  0% {
    transform: rotate(0);
  }
  100%{
    transform: rotate(360deg);
  }
`;

const StyledButton = styled.button.attrs((props) => {
    const defaultProps = {};

    if (!props.type) {
        defaultProps.type = 'outlined';
    }

    return defaultProps;
})`
    padding: 10px 15px;
    border: none;
    font-size: 18px;
    cursor: pointer;
    align-self: ${(props) => props.align || 'stretch'};
    &:focus {
        outline: none;
    }
    &:hover {
        animation: ${rotate} 0.4s ease-in;
    }
    ${(props) =>
        props.type === 'contained' &&
        css`
            color: ${(props) => props.theme.colors.secondary};
            background-color: ${(props) => props.theme.colors.primary};
        `}
    ${(props) =>
        props.type === 'outlined' &&
        css`
            color: ${(props) => props.theme.colors.primary};
            border: 1px solid ${(props) => props.theme.colors.primary};
            background-color: transparent;
        `}
`;

const LargeButton = styled(StyledButton)`
    font-size: 22px;
`;

const Button = (props) => {
    return <LargeButton {...props} />;
};

export default Button;
