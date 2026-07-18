import { Router } from "express";
import axios from "axios";

import { ORDER_SERVICE_URL } from "../config/env";
import { authenticate } from "../middleware/auth.middleware";


const router = Router();


router.post(
    "/",
    authenticate,
    async (req, res) => {

        try {

            const response =
                await axios.post(
                    `${ORDER_SERVICE_URL}/orders`,
                    req.body
                );


            return res.json(response.data);


        } catch (err: any) {

            return res
                .status(err.response?.status || 500)
                .json(
                    err.response?.data || {
                        message: "Order service error"
                    }
                );

        }

    }
);



router.get(
    "/user/:userId",
    authenticate,
    async (req, res) => {

        try {

            const response =
                await axios.get(
                    `${ORDER_SERVICE_URL}/orders/user/${req.params.userId}`
                );


            return res.json(response.data);


        } catch (err: any) {

            return res
                .status(err.response?.status || 500)
                .json(err.response?.data);

        }

    }
);



router.get(
    "/:id",
    authenticate,
    async (req, res) => {

        try {

            const response =
                await axios.get(
                    `${ORDER_SERVICE_URL}/orders/${req.params.id}`
                );


            return res.json(response.data);


        } catch (err: any) {

            return res
                .status(err.response?.status || 500)
                .json(err.response?.data);

        }

    }
);



router.patch(
    "/:id/status",
    authenticate,
    async (req, res) => {

        try {

            const response =
                await axios.patch(
                    `${ORDER_SERVICE_URL}/orders/${req.params.id}/status`,
                    req.body
                );


            return res.json(response.data);


        } catch (err: any) {

            return res
                .status(err.response?.status || 500)
                .json(err.response?.data);

        }

    }
);



export default router;