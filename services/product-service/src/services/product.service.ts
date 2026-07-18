import * as productRepository from "../repositories/product.repository";


export async function createProduct(data: any) {

    if (!data.name || !data.price || !data.stock) {
        throw new Error("Missing required product fields");
    }

    return productRepository.createProduct(data);
}


export async function getProducts() {

    return productRepository.findAllProducts();

}


export async function getProductById(id: string) {

    const product = await productRepository.findProductById(id);

    if (!product) {
        throw new Error("Product not found");
    }

    return product;
}


export async function updateProduct(
    id: string,
    data: any
) {

    const product = await productRepository.findProductById(id);

    if (!product) {
        throw new Error("Product not found");
    }

    return productRepository.updateProduct(id, data);

}


export async function deleteProduct(id: string) {

    const product = await productRepository.findProductById(id);

    if (!product) {
        throw new Error("Product not found");
    }

    return productRepository.deleteProduct(id);

}