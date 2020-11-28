import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { 
    Container, 
    LoadingIcon, 
    InputArea,
    TitleArea,
    TitleAreaText,
    TitleAreaLine,
    ButtomArea,
    SignMessageButtom,
    SignMessageButtomText,
    SignMessageButtomTextBold,
    LoadingBox,
    LoadingText
} from './styles';


import CountLogo from '../../assets/NewTop.svg';
import SignInput from '../../components/SignInput';
import CustomButtom from '../../components/CustomButtom';
import Api from '../../Api';


export default () => {
    const [nameField, setNameField] = useState('');
    const [emailField, setEmailField] = useState('');
    const [passwordField, setPasswordField] = useState('');
    
    const [Loading, setLoading] = useState(false);
    const [TextLoading, setTextLoading] = useState('Verificando os dados informados...');
    const navigation = useNavigation();

    const handleSignIn = () => {
        navigation.reset({ routes: [ {name: 'SignIn'} ] });
    };

    const handleSignUp = async () => {
        if ( !emailField || !passwordField ) {
            alert('Favor preencher os dados corretamente.');
            return false;
        }

        setLoading(true);
        await Api.SignUp(nameField, emailField, passwordField).then(async data=>{
            
            await AsyncStorage.setItem('token', data.token);
            navigation.reset({ routes: [ {name: 'MainTab'} ] });

        }).catch(err=>{
            
            console.log(err, err.response);
            if ( err.response.data.error !== '') {
                alert(err.response.data.error);
            }

        });

        setLoading(false);
    };


    return (
        <Container>
            <CountLogo width="100%"/>

            <InputArea>
                <TitleArea>
                    <TitleAreaText>Área de Cadastro</TitleAreaText>
                    <TitleAreaLine/>
                </TitleArea>

                <SignInput 
                    IconName="user"
                    value={nameField} 
                    placeholder="Nome"
                    onChangeText={t=>setNameField(t)}
                />

                <SignInput 
                    IconName="at-sign"
                    value={emailField} 
                    placeholder="E-mail"
                    onChangeText={t=>setEmailField(t)}
                />

                <SignInput 
                    IconName="unlock"
                    value={passwordField} 
                    placeholder="Senha"
                    onChangeText={t=>setPasswordField(t)}
                    password={true}
                />

                <ButtomArea>
                    <CustomButtom onPress={handleSignUp} color="#4DC3C7" colorText="#fff">Cadastrar</CustomButtom>
                </ButtomArea>
            </InputArea>
            
            <SignMessageButtom onPress={handleSignIn}>
                <SignMessageButtomText>Já possui uma conta ?</SignMessageButtomText>
                <SignMessageButtomTextBold>Logue-se.</SignMessageButtomTextBold>
            </SignMessageButtom>

            {Loading && (
                <LoadingBox>
                    <LoadingIcon size="large" color="#6FAFE9"/>
                    <LoadingText>{TextLoading}</LoadingText>
                </LoadingBox>
            )}
        </Container>
    );
};