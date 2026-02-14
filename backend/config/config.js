// import mongoose from "mongoose";
// // connection 
// const connectDB = async (req,res) =>{
//     try {
//         const conn = await mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/Civic");
//         console.log(`Mongodb Connected : ${conn.connection.host}`);
//     } catch (error) {
//         console.log(`Error : ${error.message}`);
//     }
// }


// export default connectDB ;

import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB Connected Successfully");
  } catch (error) {
    console.error("MongoDB Connection Error:", error.message);
    process.exit(1);
  }
};

export default connectDB;
