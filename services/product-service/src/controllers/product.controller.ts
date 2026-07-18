import { Request, Response } from "express";
import * as productService from "../services/product.service";


export async function createProduct(
    req: Request,
    res: Response
) {
    try {
        const product = await productService.createProduct(req.body);

        return res.status(201).json(product);

    } catch (err: any) {

        return res.status(400).json({
            message: err.message,
        });

    }
}



export async function getProducts(
    req: Request,
    res: Response
) {
    try {

        const products = await productService.getProducts();

        return res.json(products);

    } catch (err: any) {

        return res.status(500).json({
            message: err.message,
        });

    }
}



export async function getProductById(
    req: Request,
    res: Response
) {
    try {

        const product = await productService.getProductById(
            req.params.id as string
        );

        return res.json(product);

    } catch (err: any) {

        return res.status(404).json({
            message: err.message,
        });

    }
}



export async function updateProduct(
    req: Request,
    res: Response
) {
    try {

        const product = await productService.updateProduct(
            req.params.id as string,
            req.body
        );

        return res.json(product);

    } catch (err: any) {

        return res.status(404).json({
            message: err.message,
        });

    }
}



export async function deleteProduct(
    req: Request,
    res: Response
) {
    try {

        await productService.deleteProduct(
            req.params.id as string
        );

        return res.json({
            message: "Product deleted successfully",
        });

    } catch (err: any) {

        return res.status(404).json({
            message: err.message,
        });

    }
}