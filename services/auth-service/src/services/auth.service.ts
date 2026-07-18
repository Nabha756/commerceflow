import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import * as userRepository from "../repositories/user.repository";
import { JWT_SECRET } from "../config/env";

export async function register(data: any) {
    const existing = await userRepository.findByEmail(data.email);

    if (existing) {
        throw new Error("Email already exists");
    }

    const hashedPassword = await bcrypt.hash(data.password, 10);

    const user = await userRepository.createUser({
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        hashedPassword,
    });

    const token = jwt.sign(
        {
            id: user.id,
            email: user.email,
            role: user.role,
        },
        JWT_SECRET,
        {
            expiresIn: "1h",
        }
    );

    return {
        user,
        token,
    };
}

export async function login(email: string, password: string) {
    const user = await userRepository.findByEmail(email);

    if (!user) {
        throw new Error("Invalid credentials");
    }

    const valid = await bcrypt.compare(password, user.hashedPassword);

    if (!valid) {
        throw new Error("Invalid credentials");
    }

    const token = jwt.sign(
        {
            id: user.id,
            email: user.email,
            role: user.role,
        },
        JWT_SECRET,
        {
            expiresIn: "1h",
        }
    );

    return {
        user,
        token,
    };
}

export async function getUser(id: string) {
    return userRepository.findById(id);
}