import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

import IAuth from './interfaces/IAuth';
import ICountDelete from './interfaces/ICountDelete';
import IGetCounts from './interfaces/IGetCounts';

const Api = axios.create({
    baseURL: 'http://192.168.100.6:3000'
});

export default {
    async checkToken (token:string) : Promise<IAuth> {
        const req = await Api.post('auth/refresh', {token});
        return req.data;
    },
    
    async SignIn (email:string, password:string) : Promise<IAuth>{
        const req = await Api.post('auth', {email, password});
        return req.data;
    },

    async SignUp (name:string, email:string, password:string) : Promise<IAuth>{
        const req = await Api.post('users', {name, email, password});
        return req.data;
    },

    async GetCounts (page?:number, period?:Object, state?:number): Promise<IGetCounts>{
        await this.SetTokent();
        const req = await Api.get(`counts`, { 
            params: {
                page,
                state,
                ...period
            }
        });

        return req.data;
    },

    async DeleteCount (id: string): Promise<ICountDelete>{
        await this.SetTokent();
        const req = await Api.delete(`counts?id=${id}`);
        return req.data;
    },

    async SetTokent (): Promise<void>{
        const token = await AsyncStorage.getItem('token');

        if ( token !== '' ) {
            Api.defaults.headers.authorization = `Bearer ${token}`;
        }
    }
};