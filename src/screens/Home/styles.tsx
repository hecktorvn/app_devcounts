import React from 'react';
import styled from 'styled-components/native';

export const HomeArea = styled.View`
    flex: 1;
    flex-direction: column;
`;

export const InfoArea = styled.View`
    width: 100%;
    height: 130px;
    flex-direction: row;
    justify-content: space-between;
    background-color: #DFE2E7;
    padding: 25px 10px;
    padding-top: 40px;
`;

export const PeriodArea = styled.View`
    padding: 9px;
    flex-direction: column;
    background-color: #fff;
    border-radius: 5px;
    margin: 0 5px;    
    flex: 1;
`;

export const PeriodText = styled.Text`
    font-size: 10px;
    color: rgba(0,0,0,0.3);
    font-weight: bold;
    margin-bottom: 6px;
`;

export const PeriodDate = styled.View`
    flex-direction: row;
    justify-content: space-between;
`;

export const PeriodDateText = styled.Text`
    font-size: 12px;
    font-weight: bold;
    color: #4D9BC7;
`;

export const PeriodSpace = styled.View`
    width: 2px;
    height: 100%;
    background-color: #DFE2E7;
`;


/**
 * TOTAL AREA
 */

export const TotalArea = styled.View`
    margin: 0 5px;
    flex-direction: column;
    background-color: #fff;
    border-radius: 5px;
    padding: 9px;
    width: 150px;
`;

export const TotalTextArea = styled.View`
    flex-direction: row;
    justify-content: space-between;
`;

export const TotalTitle = styled.Text`
    font-size: 10px;
    color: rgba(0,0,0,0.3);
    font-weight: bold;
    margin-bottom: 5px;
`;

export const TotalValue = styled.Text`
    font-size: 12px;
    color: #A4BDD9;
    margin-bottom: 5px;
    font-weight: bold;
`;

export const DebtArea = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const DebtAreaTextArea = styled.View`
    flex: 1;
    flex-direction: row;
    align-items: flex-end;
    justify-content: flex-end;
`;

export const DebtAreaTextPrefix = styled.Text`
    font-size: 12px;
    font-weight: bold;
    color: #B10A0A;
    padding-bottom: 2px;
`;

export const DebtAreaText = styled.Text`
    font-size: 20px;
    font-weight: bold;
    color: #B10A0A;
`;



/**
 * HEADER AREA
 */

export const HeaderHome = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    padding: 15px;
`;

export const HeaderHomeText = styled.Text`
    font-size: 15px;
    font-weight: bold;
    color: #4D9BC7;
`;

export const HeaderHomeSpace = styled.View`
    flex: 1;
    height: 2px;
    border-radius: 2px;
    background-color: #DFE2E7;
    margin-left: 15px;
`;


export const CountsArea = styled.ScrollView`
    flex: 1;
    flex-direction: column;
    padding: 0 10px;
    margin-bottom: 10px;  
`;

export const LoadingIcon = styled.ActivityIndicator`
    margin-top: 100px;
`;

export const DebtAreaTextAreaLoad = styled.ActivityIndicator`
    background-color: #fff;
    position: absolute;
    z-index: 100;
    width: 100%;
    top: 5px;
    left: 0;
`;