import express from "express";
import cors from "cors";
import morgan from "morgan";

import { PORT } from "./config/env";

import orderRoutes from "./routes/order.routes";


const app = express();


app.use(cors());
app.use(express.json());
app.use(morgan("dev"));


app.get("/", (req,res)=>{
    res.json({
        message:"Order Service running 🚀"
    });
});


app.use(
    "/orders",
    orderRoutes
);


app.listen(PORT,()=>{

    console.log(
        `Order service running on port ${PORT}`
    );

});