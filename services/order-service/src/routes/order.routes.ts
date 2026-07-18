import { Router } from "express";

import * as orderController from "../controllers/order.controller";


const router = Router();


router.post(
    "/",
    orderController.createOrder
);


router.get(
    "/user/:userId",
    orderController.getUserOrders
);


router.get(
    "/:id",
    orderController.getOrder
);


router.patch(
    "/:id/status",
    orderController.updateStatus
);


export default router;