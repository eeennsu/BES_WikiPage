'use server';

export const userSignUp = async ({
    email,
    password
}: {
    email: string;
    password: string;
}) => {
    try {
        // const res = await 
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
        // const res = await 
    } catch (error) {
        console.log(error);
        throw new Error(`Faied to login. error - ${(error as Error).message}`);
    }
}