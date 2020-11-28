import React from 'react';
import styled from 'styled-components/native';

export const InputArea = styled.View`
    width: 100%;
    height: 39px;
    border-radius: 5px;
    background-color: #fff;
    flex-direction: row;
    
    justify-content: center;
    align-items: center;

    padding: 5px 15px;
    margin: 7.5px 0;
`;

export const Input = styled.TextInput`
    color: black;
    padding-left: 10px;
    font-size: 13px;
    flex: 1;
`;