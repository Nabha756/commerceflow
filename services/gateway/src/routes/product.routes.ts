import { Router } from "express";
import axios from "axios";
import { authenticate } from "../middleware/auth.middleware";
import { PRODUCT_SERVICE_URL } from "../config/env";

const router = Router();


router.post("/", authenticate, async (req,res)=> {

    try {

        const response = await axios.post(
            `${PRODUCT_SERVICE_URL}/products`,
            req.body
        );

        return res.json(response.data);

    } catch (err: any) {

        return res
            .status(err.response?.status || 500)
            .json(err.response?.data);

    }

});


router.get("/", async (req, res) => {

    try {

        const response = await axios.get(
            `${PRODUCT_SERVICE_URL}/products`
        );

        return res.json(response.data);

    } catch (err: any) {

        return res
            .status(err.response?.status || 500)
            .json(err.response?.data);

    }

});


router.get("/:id", async (req, res) => {

    try {

        const response = await axios.get(
            `${PRODUCT_SERVICE_URL}/products/${req.params.id as string}`
        );

        return res.json(response.data);

    } catch (err: any) {

        return res
            .status(err.response?.status || 500)
            .json(err.response?.data);

    }

});


router.put("/:id", async (req, res) => {

    try {

        const response = await axios.put(
            `${PRODUCT_SERVICE_URL}/products/${req.params.id as string}`,
            req.body
        );

        return res.json(response.data);

    } catch (err: any) {

        return res
            .status(err.response?.status || 500)
            .json(err.response?.data);

    }

});


router.delete("/:id", authenticate, async (req,res)=>{

    try {

        const response = await axios.delete(
            `${PRODUCT_SERVICE_URL}/products/${req.params.id as string}`
        );

        return res.json(response.data);

    } catch (err: any) {

        return res
            .status(err.response?.status || 500)
            .json(err.response?.data);

    }

});


export default router;