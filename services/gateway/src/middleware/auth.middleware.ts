import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

import { JWT_SECRET } from "../config/env";


export function authenticate(
    req: Request,
    res: Response,
    next: NextFunction
) {

    try {

        const authHeader =
            req.headers.authorization;


        if (!authHeader) {

            return res.status(401).json({
                message: "No token provided"
            });

        }


        const token =
            authHeader.split(" ")[1];


        const decoded =
            jwt.verify(
                token,
                JWT_SECRET
            );


        req.user = decoded;


        next();


    } catch {

        return res.status(401).json({
            message: "Invalid token"
        });

    }

}