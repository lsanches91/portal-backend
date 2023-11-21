import { Request, Response } from "express";
import { prismaClient } from "../../database/prismaClient";

export class CreateEstado {
    async handle(request: Request, response: Response) {
        try {
            const {
                nome,
                sigla
            } = request.body;

            const estado = await prismaClient.estado.create({
                data: {
                    sigla,
                    nome
                },
            });

            return response.json(estado);

        } catch (erro) {
            console.log(erro);
            response.status(500).json({ error: "Erro ao criar o Estado." });
        }
    }
}