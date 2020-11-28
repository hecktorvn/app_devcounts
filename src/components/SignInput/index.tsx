import React from 'react';
import { TextInputProps } from 'react-native';
import { SvgProps } from 'react-native-svg';

import Icon from 'react-native-vector-icons/Feather';

import { InputArea, Input } from './styles';

interface SignInputDTO extends TextInputProps {
    IconName?: string,
    IconSvg?: React.FC<SvgProps>,
    password?: boolean
}

const SignInput: React.FC<SignInputDTO> = ({IconName, IconSvg, placeholder, value, onChangeText, password}) => (
    <InputArea>
        {IconName && (
            <Icon name={ IconName } size={15} color="#5FD7DB"/>
        )}

        {IconSvg && (
            <IconSvg width={15} height={15} color="#5FD7DB"/>
        )}

        <Input 
            placeholder={placeholder}
            placeholderTextColor="#B3B3B3"
            value={value}
            onChangeText={onChangeText}
            secureTextEntry={password}
        />
    </InputArea>
);


export default SignInput;