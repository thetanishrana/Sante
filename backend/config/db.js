import mongoose from "mongoose";

export const  connectDB = async () =>{

    await mongoose.connect('mongodb+srv://tanishrana101:<password>@cluster0.rmkgpig.mongodb.net/Santé').then(()=>console.log("DB Connected"));
   
}
