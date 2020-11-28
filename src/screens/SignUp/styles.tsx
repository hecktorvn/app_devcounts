import React from 'react';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    flex: 1;
    background-color: #F3F5FA;
    justify-content: center; 
    align-items: center;
`;

export const LoadingIcon = styled.ActivityIndicator`
    margin-top: 100px;
`;

export const InputArea = styled.View`
    padding: 30px 40px;
`;

export const TitleArea = styled.View`
    flex-direction: row;
    margin-bottom: 13px;
    align-items: center;
    margin-top: -40px;
`;

export const TitleAreaText = styled.Text`
    color: #4D9BC7;
    font-weight: bold;
    font-size: 15px;
    margin-right: 15px;
`;

export const TitleAreaLine = styled.View`
    flex: 1;
    height: 2px;
    background-color: rgba(196, 196, 196, 0.3);
    border-radius: 2px;
`;

export const ButtomArea = styled.View`
    margin-top: 15px;
`;

export const SignMessageButtom = styled.TouchableOpacity`
    flex-direction: row;
    flex: 1;
`;

export const SignMessageButtomText = styled.Text`
    font-size: 12px;
    color: #A4BDD9;
    margin-right: 5px;
`;

export const SignMessageButtomTextBold = styled.Text`
    font-size: 12px;
    font-weight: bold;
    color: #4D9BC7;
`;


export const LoadingBox = styled.View`
    background: rgba(255, 255, 255, 0.9);
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
`;

export const LoadingText = styled.Text`
    margin-top: 15px;
    color: #6FAFE9;
`;