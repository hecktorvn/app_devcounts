import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import styled from 'styled-components/native';
import ITheme from '../../interfaces/ITheme';

interface CountArea extends TouchableOpacityProps{
    expired?: boolean;
}


interface IPropsDTO {
    theme: ITheme
}

export const CountArea = styled.TouchableOpacity<CountArea>`
    width: 100%;
    flex-direction: column;
    background-color: ${(props:IPropsDTO)=>props.theme.BG_COLOR};
    border-radius: 5px;
    margin: 5px 0;
    padding: 13px 10px;
`;

export const CountHeader = styled.View`
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 5px;
`;


export const CountHeaderTextBox = styled.View`
    flex: 1;
    flex-direction: row;
`;

export const CountHeaderText = styled.Text`
    font-weight: bold;
    font-size: 13px;
    color: ${(props:IPropsDTO)=>props.theme.HEADER_TEXT_COLOR};
    margin-left: 6px;
`;

export const CountHeaderDate = styled.Text`
    font-size: 11px;
    color: ${(props:IPropsDTO)=>props.theme.HEADER_DATE_COLOR};
`;

export const CountBody = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
`;

export const CountBodyPrice = styled.View`
    flex-direction: row;
    justify-content: flex-end;
    align-items: flex-end;
`;

export const CountBodyPricePrefix = styled.Text`
    font-size: 10px;
    color: ${(props:IPropsDTO)=>props.theme.PRICE_TEXT_COLOR};

    ${(props:IPropsDTO)=>props.theme.PRICE_TEXT_UNDERLINE && `
        text-decoration: line-through;
    `}

    padding-bottom: 2px;
    margin-right: 3px;
`;

export const CountBodyPriceText = styled.Text`
    font-size: 16px;
    color: ${(props:IPropsDTO)=>props.theme.PRICE_TEXT_COLOR};

    ${(props:IPropsDTO)=>props.theme.PRICE_TEXT_UNDERLINE && `
        text-decoration: line-through;
    `}
`;

export const CountBodyPortion = styled.Text`
    font-size: 10px;
    color: rgba(38, 50, 56, 0.5);
`;

export const CountBodyPriceNote = styled.Text`
    color: rgba(38, 50, 56, 0.5);
    font-size: 11px;
    margin-left: 5px;
`;