import mongoose from 'mongoose';

// Track the Connection Status 
let isConnected = false;

export const connectToDB = async () => { 
    mongoose.set('strictQuery',true);

    if(isConnected){
        console.log('Mongo DB is already connected');
        return;
    }
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            dbName: "Share_Prompt",
            useNewUrlParser: true, 
            useUnifiedTopology: true,

        }) 
        isConnected = true;
        console.log('Mongo DB is connected');

    } catch (error) {
        console.log('Error connecting to MongoDB', error);
    }
}
