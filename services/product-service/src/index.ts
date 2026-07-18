import express from "express";
import cors from "cors";
import redisClient from "./config/redis";
import { PORT } from "./config/env";
import productRoutes from "./routes/product.routes";

const app = express();

app.use(cors());
app.use(express.json());
redisClient.connect();

app.listen(PORT, () => {
    console.log(`Product service running on ${PORT}`);
});
app.get("/", (req, res) => {
    res.json({
        message: "Product Service running 🚀"
    });
});

app.use("/api/products", productRoutes);

app.listen(PORT, () => {
    console.log(`Product Service running on port ${PORT}`);
});