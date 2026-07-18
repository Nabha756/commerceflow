import * as productRepository from "../repositories/product.repository";
import redisClient from "../config/redis";


export async function createProduct(data: any) {

    if (!data.name || !data.price || !data.stock) {
        throw new Error("Missing required product fields");
    }

    const product = await productRepository.createProduct(data);

    // invalidate product list cache
    await redisClient.del("products");

    return product;
}



export async function getProducts() {

    const cachedProducts = await redisClient.get("products");


    if (cachedProducts) {

        console.log("Products fetched from Redis");

        return JSON.parse(cachedProducts);

    }


    console.log("Products fetched from Database");


    const products = await productRepository.findAllProducts();


    await redisClient.set(
        "products",
        JSON.stringify(products),
        {
            EX: 60
        }
    );


    return products;

}



export async function getProductById(id: string) {


    const cachedProduct =
        await redisClient.get(`product:${id}`);


    if (cachedProduct) {

        console.log("Product fetched from Redis");

        return JSON.parse(cachedProduct);

    }


    const product =
        await productRepository.findProductById(id);


    if (!product) {
        throw new Error("Product not found");
    }


    await redisClient.set(
        `product:${id}`,
        JSON.stringify(product),
        {
            EX: 60
        }
    );


    return product;

}



export async function updateProduct(
    id: string,
    data: any
) {

    const product =
        await productRepository.findProductById(id);


    if (!product) {
        throw new Error("Product not found");
    }


    const updatedProduct =
        await productRepository.updateProduct(id, data);


    // remove stale cache
    await redisClient.del("products");
    await redisClient.del(`product:${id}`);


    return updatedProduct;

}



export async function deleteProduct(id: string) {


    const product =
        await productRepository.findProductById(id);


    if (!product) {
        throw new Error("Product not found");
    }


    const deleted =
        await productRepository.deleteProduct(id);


    // remove stale cache
    await redisClient.del("products");
    await redisClient.del(`product:${id}`);


    return deleted;

}