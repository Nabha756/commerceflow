import { Request, Response } from "express";
import * as authService from "../services/auth.service";

export async function register(req: Request, res: Response) {
    try {
        const result = await authService.register(req.body);

        return res.status(201).json(result);
    } catch (err: any) {
        return res.status(400).json({
            message: err.message,
        });
    }
}

export async function login(req: Request, res: Response) {
    try {
        const { email, password } = req.body;

        const result = await authService.login(email, password);

        return res.json(result);
    } catch (err: any) {
        return res.status(401).json({
            message: err.message,
        });
    }
}

export async function me(req: any, res: Response) {
    try {
        const user = await authService.getUser(req.user.id);

        return res.json(user);
    } catch (err: any) {
        return res.status(404).json({
            message: err.message,
        });
    }
}