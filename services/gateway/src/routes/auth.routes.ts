import { Router } from "express";
import axios from "axios";

import { AUTH_SERVICE_URL } from "../config/env";

const router = Router();


router.post("/register", async (req, res) => {
    try {

        const response = await axios.post(
            `${AUTH_SERVICE_URL}/register`,
            req.body
        );

        return res.json(response.data);

    } catch (err: any) {

        return res
            .status(err.response?.status || 500)
            .json(
                err.response?.data || {
                    message: "Auth service error"
                }
            );

    }
});


router.post("/login", async (req, res) => {
    try {

        const response = await axios.post(
            `${AUTH_SERVICE_URL}/login`,
            req.body
        );

        return res.json(response.data);

    } catch (err: any) {

        return res
            .status(err.response?.status || 500)
            .json(
                err.response?.data || {
                    message: "Auth service error"
                }
            );

    }
});


export default router;