import dotenv from "dotenv";
dotenv.config();
import { connectRabbitMQ } from "./config/rabbitmq";
import app from "./app";

const PORT = process.env.PORT || 3000;
connectRabbitMQ();
app.listen(PORT, () => {
    console.log(`🚀 Auth Service running on ${PORT}`);
});