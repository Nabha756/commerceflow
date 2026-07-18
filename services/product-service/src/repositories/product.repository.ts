import { prisma } from "../config/prisma";

export async function createProduct(data: any) {
    return prisma.product.create({
        data,
    });
}


export async function findAllProducts() {
    return prisma.product.findMany();
}


export async function findProductById(id: string) {
    return prisma.product.findUnique({
        where: {
            id,
        },
    });
}


export async function updateProduct(
    id: string,
    data: any
) {
    return prisma.product.update({
        where: {
            id,
        },
        data,
    });
}


export async function deleteProduct(id: string) {
    return prisma.product.delete({
        where: {
            id,
        },
    });
}