import { NextFunction } from "express";
import { Request, Response, json } from "express";
import { prismaClient } from "../database/prismaClient";
import jwt, { Jwt } from 'jsonwebtoken'

type JwtPayload = {
    id: number
}

export const authMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    const { authorization } = req.headers
    if (!authorization) {
        return res.status(401);
    }

    const token = authorization.split(" ")[1];
    try {
        const { id } = jwt.verify(token, process.env.JWT_PASS ?? "") as JwtPayload

        const usuario = await prismaClient.usuario.findUnique({
            where: {
                id: id
            }
        })

        if (!usuario) {
            return res.status(401);
        }

        next()
    } catch (error) {
        return res.status(401).json({ error: "Não foi possivel válidar o Token, realize o login novamente." });
    }
}