import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI;

export const connectToDatabase = async () => {
  try {
    if (!MONGODB_URI) throw new Error('MONGODB_URI is missing');

    // Check if already connected or connecting
    if (mongoose.connection.readyState === 1 || mongoose.connection.readyState === 2) {
      console.log('Database connection is already established');
      return;
    }

    await mongoose.connect(MONGODB_URI, {
      dbName: 'evently',
      bufferCommands: false,
    });

    console.log('DB Online');
  } catch (error) {
    console.error('Database connection error:', error);
    throw new Error('Error al iniciar la base de datos');
  }
};
