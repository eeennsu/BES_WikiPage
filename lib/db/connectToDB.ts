import mongoose from 'mongoose';

const MONGO_DB_URL = process.env.MONGO_DB_URL;

let isConnected = false;

export default async function connectToDB() {
    try {
        if (isConnected) return;

        if (!MONGO_DB_URL) throw new Error('Mongo url is not defined.');

        mongoose.set('strictQuery', true);

        await mongoose.connect(MONGO_DB_URL);
        
        isConnected = true;
    } catch (error) {
        console.log(error);
    }
}