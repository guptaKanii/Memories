import express  from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";

import postRoutes from "./routes/post.js";

const app = express();


app.use(bodyParser.json({limit:'30mb',extended:true}));
app.use(bodyParser.urlencoded({limit:'30mb',extended:true}));
app.use(cors());
app.use('/posts',postRoutes);

const CONNECTION_URL = 'mongodb+srv://<Shristy1234>:<Shristy@1234>@cluster0.q25qx.mongodb.net/test';
const PORT = process.env.PORT || 5000;
app.listen(PORT,()=> console.log(`server running on port:${PORT}`));

mongoose.connect(CONNECTION_URL,{useNewUrlParser: true,useUnifiedTopology: true})
 .then(()=>app.listen(PORT,()=> console.log(`server running on port:${PORT}`)))
 .catch((error)=>console.log(error.message));

//mongoose.set({useFindAndModify:false});
//https://mongodb.com/cloud/atlas