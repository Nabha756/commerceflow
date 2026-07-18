import { prisma } from "../config/prisma";


export async function createOrder(data: any) {

    return prisma.order.create({
        data: {
            userId: data.userId,
            total: data.total,
            items: {
                create: data.items
            }
        },
        include: {
            items: true
        }
    });

}


export async function findOrdersByUserId(
    userId: string
) {

    return prisma.order.findMany({
        where: {
            userId
        },
        include: {
            items: true
        }
    });

}


export async function findOrderById(
    id: string
) {

    return prisma.order.findUnique({
        where: {
            id
        },
        include: {
            items: true
        }
    });

}


export async function updateOrderStatus(
    id: string,
    status: string
) {

    return prisma.order.update({
        where: {
            id
        },
        data: {
            status: status as any
        }
    });

}