import React, { useRef } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import Flex from './Flex';
import Line from './Line';

const StyledConsole = styled.div`
    display: flex;
    flex-direction: column;
    font-size: 20px;
    height: 70vh;
`;

const StyledInput = styled.input`
    flex-grow: 1;
    font: inherit;
    border: none;
    background-color: #000;
    color: ${(props) => props.theme.colors.primary};

    &:focus {
        outline: none;
    }
`;

const Console = ({ color, ...props }) => {
    const [lines, setLines] = useState(['c/users/admin>:']);

    const onKeyDown = (e) => {
        if (e.key === 'Enter') {
            setLines([...lines, 'c/users/admin>:']);
        }
    };

    // useEffect(() => {
    //     if (inputRef.current) {
    //         inputRef.current.focus();
    //     }
    // }, []);

    return (
        <StyledConsole>
            {lines.map((line, index) => {
                return (
                    <Flex key={index}>
                        <Line color={color} key={index}>
                            {line}
                        </Line>

                        <StyledInput
                            autoFocus
                            spellCheck="false"
                            onKeyDown={onKeyDown}
                            color={color}
                            {...props}
                        />
                    </Flex>
                );
            })}
        </StyledConsole>
    );
};

export default Console;
