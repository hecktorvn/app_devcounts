import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';


import { Container, LoadingIcon } from './styles';
import CountLogo from '../../assets/NewTop.svg';
import Api from '../../Api';


export default () => {
    const navigation = useNavigation();

    useEffect(() => {
        const CheckHaveToken = async () => {
            let token = await AsyncStorage.getItem('token') as string;

            if( token ) {
                await Api.checkToken(token).then(async data=>{
                    await AsyncStorage.setItem('token', data.token);
                }).catch(err=>{
                    if ( err.response.data.error !== '') {
                        alert(err.response.data.error);
                    }
                });

                return navigation.reset({ routes: [{name:'MainTab'}] });
            }

            return navigation.reset({ routes: [{name:'SignIn'}] });
        };

        CheckHaveToken();
    }, []);

    return (
        <Container>
            <CountLogo width="100%"/>
            <LoadingIcon size="large" color="#6FAFE9"/>
        </Container>
    );
};