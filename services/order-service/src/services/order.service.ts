import * as orderRepository from "../repositories/order.repository";


export async function createOrder(data: any) {

    const total = data.items.reduce(
        (
            sum: number,
            item: any
        ) => {
            return sum + item.price * item.quantity;
        },
        0
    );


    return orderRepository.createOrder({
        ...data,
        total
    });

}



export async function getOrdersByUser(
    userId: string
) {

    return orderRepository.findOrdersByUserId(
        userId
    );

}



export async function getOrder(
    id: string
) {

    return orderRepository.findOrderById(
        id
    );

}



export async function changeStatus(
    id: string,
    status: string
) {

    return orderRepository.updateOrderStatus(
        id,
        status
    );

}