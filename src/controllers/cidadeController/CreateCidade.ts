import { Request, Response } from "express";
import { prismaClient } from "../../database/prismaClient";

export class CreateCidade {
    async handle(request: Request, response: Response) {
        try {
            const {
                nome,
                estado_sigla
            } = request.body;

            const cidade = await prismaClient.cidade.create({
                data: {
                    nome,
                    estado_sigla
                },
            });

            return response.json(cidade);

        } catch (erro) {
            console.log(erro);
            response.status(500).json({ error: "Erro ao criar a Cidade." });
        }
    }
}