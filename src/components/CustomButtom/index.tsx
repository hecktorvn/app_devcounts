import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import { CustomButtomArea, CustomButtomAreaText } from './styles';

interface CustomButtomDTO extends TouchableOpacityProps {
    color?: string;
    colorText?: string;
}

const CustomButtom: React.FC<CustomButtomDTO> = ({color, colorText, children, ...props}) => (
    <CustomButtomArea color={color} {...props}>
        <CustomButtomAreaText color={colorText}>{children}</CustomButtomAreaText>
    </CustomButtomArea>
);


export default CustomButtom;