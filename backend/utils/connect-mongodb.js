const mongoose = require('mongoose')

const connectdb = async() => {
    try {
        mongoose.set("strictQuery", false);

        const mongodb_url = process.env.VITE_MONGODB_URI
        
        const option = {}

        await mongoose.connect(mongodb_url, option);

        console.log(`Mongodb connected: ${mongoose.connection.host}`);

    } catch (error) {
        console.error(error);
    }
    
}

export default connectdb;