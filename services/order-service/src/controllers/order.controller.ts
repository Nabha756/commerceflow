import { Request, Response } from "express";

import * as orderService from "../services/order.service";


export async function createOrder(
    req: Request,
    res: Response
) {

    try {

        const order =
            await orderService.createOrder(
                req.body
            );


        return res.status(201).json(order);


    } catch (err: any) {

        return res.status(400).json({
            message: err.message
        });

    }

}



export async function getUserOrders(
    req: Request,
    res: Response
) {

    try {

        const orders =
            await orderService.getOrdersByUser(
                req.params.userId as string
            );


        return res.json(orders);


    } catch(err:any){

        return res.status(400).json({
            message: err.message
        });

    }

}



export async function getOrder(
    req: Request,
    res: Response
) {

    const order =
        await orderService.getOrder(
            req.params.id as string
        );


    return res.json(order);

}



export async function updateStatus(
    req: Request,
    res: Response
) {

    const order =
        await orderService.changeStatus(
            req.params.id as string,
            req.body.status
        );


    return res.json(order);

}