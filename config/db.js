import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGO_URI);

    console.log(
      `MongoDB connected: ${connection.connection.host}`.magenta.underline.bold
    );
  } catch (error) {
    console.log(`Error: ${error.message}`.red);
    process.exit(1);
  }
};

export default connectDB;
