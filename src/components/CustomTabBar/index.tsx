import AsyncStorage from '@react-native-async-storage/async-storage';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import React from 'react';

import Icon from 'react-native-vector-icons/Feather';

import { TabArea, TabItem } from './styles';

const CustomTabBar:React.FC<BottomTabBarProps> = ({state, navigation}) => {
    const goTo = (page:string) => {
        navigation.navigate(page);
    };

    const activeItem = (index:number) => {
        const color = state.index === index ? '#fff' : '#262626';
        return {color};
    };

    return (
        <TabArea>
            <TabItem onPress={()=>goTo('Home')}>
                <Icon style={ activeItem(0) } name="home" size={20}/>
            </TabItem>

            <TabItem onPress={()=>goTo('Home')}>
                <Icon style={ activeItem(1) } name="dollar-sign" size={20}/>
            </TabItem>

            <TabItem onPress={()=>{
                AsyncStorage.setItem('token', '');
                navigation.reset({ routes: [{name: 'SignIn'}] });
            }}>
                <Icon style={ activeItem(2) } name="sliders" size={20}/>
            </TabItem>
        </TabArea>
    );
};

export default CustomTabBar;