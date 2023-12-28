import mongoose from "mongoose";

const uri = `mongodb://root:example@127.0.0.1:27017/api-rest?authSource=admin`;

const connectDataBase = async () => {
    try {
        await mongoose.connect(uri);
        console.log(`Database conected!`);

    } catch (error) {
        console.error(`Error to connect database`, error);
    }
};

export { connectDataBase }