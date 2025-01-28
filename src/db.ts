import mongoose, { ConnectOptions } from 'mongoose';

const connectDB = async (): Promise<void> => {
    const uri = process.env.MONGO_URI || 'mongodb+srv://kavinkrish82:KAVinkrish82@development.udu756m.mongodb.net/';
    try {
        await mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
          } as ConnectOptions)
        console.log('MongoDB connected successfully');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        process.exit(1); // Exit the process if connection fails
    }
};

export default connectDB;
