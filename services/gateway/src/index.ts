import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";

import { PORT } from "./config/env";

import authRoutes from "./routes/auth.routes";
import productRoutes from "./routes/product.routes";
import orderRoutes from "./routes/order.routes";


const app = express();


app.use(cors());

app.use(express.json());

app.use(helmet());

app.use(morgan("dev"));



app.get("/", (req, res) => {
    res.json({
        message: "CommerceFlow Gateway running 🚀"
    });
});



app.use(
    "/api/auth",
    authRoutes
);


app.use(
    "/api/products",
    productRoutes
);


app.use(
    "/api/orders",
    orderRoutes
);



app.listen(PORT, () => {

    console.log(
        `Gateway running on port ${PORT}`
    );

});