import mongoose from 'mongoose';
import { DB_URL } from './serverConfig.js';

export default async function connectDB() {
    try {
        await mongoose.connect(DB_URL);
        console.log('connected to mongo db')
    } catch (error) {
        console.log('Something went wrong');
        console.log(error);
    }
}