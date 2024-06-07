import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI

export const connectToDatabase = async() => {
    try {
        if(!MONGODB_URI) throw new Error('MONGODB_URI is missing')

        await mongoose.connect(MONGODB_URI, {
            dbName: 'evently',
            bufferCommands: false
        });

        console.log('DB Online');
    } catch (error) {
        console.log(error);

        throw new Error('Error al iniciar la base de datos')
    }
}