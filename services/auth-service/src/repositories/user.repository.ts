import prisma from "../config/prisma";

export async function findByEmail(email: string) {
    return prisma.user.findUnique({
        where: {
            email,
        },
    });
}

export async function findById(id: string) {
    return prisma.user.findUnique({
        where: {
            id,
        },
    });
}

export async function createUser(data: {
    firstName: string;
    lastName: string;
    email: string;
    hashedPassword: string;
}) {
    return prisma.user.create({
        data,
    });
}