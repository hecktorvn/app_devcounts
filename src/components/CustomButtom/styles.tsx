import React from 'react';
import { TextProps, TouchableOpacityProps } from 'react-native';
import styled from 'styled-components/native';

interface ICustomButtom extends TouchableOpacityProps{
    color?: string;
}

interface ICustomButtomText extends TextProps{
    color?: string;
}

export const CustomButtomArea = styled.TouchableOpacity<ICustomButtom>`
    background-color: ${props=>props.color || '#ccc'};
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    padding: 13px;
`;

export const CustomButtomAreaText = styled.Text<ICustomButtomText>`
    color: ${props=>props.color || '#000'};
`;