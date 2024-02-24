'use server';

import type { MongoUser } from '@/zustand/user/types';
import connectToDB from '../db/connectToDB';
import UserModel from '../models/User.model';
import bcrypt from 'bcrypt';

export const userSignUp = async ({
    email,
    password
}: {
    email: string;
    password: string;
}) => {
    try {
        connectToDB();

        const exists = await UserModel.findOne({ email });

        if (exists) {
            return false;           // 입력한 이메일이 이미 존재하면 회원가입 실패
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const response = await UserModel.create({
            email,
            password: hashedPassword
        });
        
        return response as MongoUser;

    } catch (error) {
        console.log(error);
        throw new Error(`Faied to signUp. error - ${(error as Error).message}`);
    }
}

export const userLogin = async ({
    email,
    password
}: {
    email: string;
    password: string;
}) => {
    try {
        connectToDB();
        
        const exists = await UserModel.findOne({ email });

        if (!exists) {
            console.log(exists);
            return false;               // 입력한 이메일과 일치하는 것이 없으면 실패
        }
    
        const isMatchPassword = await bcrypt.compare(password, exists.password);
        
        if (!isMatchPassword) {
            return false;
        }                
        
        return exists as MongoUser;

    } catch (error) {
        console.log(error);
        throw new Error(`Faied to login. error - ${(error as Error).message}`);
    }
}