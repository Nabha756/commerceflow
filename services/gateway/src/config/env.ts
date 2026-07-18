import dotenv from "dotenv";

dotenv.config();


export const PORT =
    Number(process.env.PORT) || 3000;


export const AUTH_SERVICE_URL =
    process.env.AUTH_SERVICE_URL ||
    "http://localhost:3001/api/auth";


export const PRODUCT_SERVICE_URL =
    process.env.PRODUCT_SERVICE_URL ||
    "http://localhost:3002";


export const JWT_SECRET =
    process.env.JWT_SECRET || "";