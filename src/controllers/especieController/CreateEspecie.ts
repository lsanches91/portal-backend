import { Request, Response } from "express";
import { prismaClient } from "../../database/prismaClient";

export class CreateEspecie {
    async handle(request: Request, response: Response) {
        try {
            const {
                nome_comum,
                nome_cientifico,
                situacao,
            } = request.body;

            const especie = await prismaClient.especie.create({
                data: {
                    nome_comum,
                    nome_cientifico,
                    situacao,
                },
            });

            return response.json(especie);

        } catch (erro) {
            console.log(erro);
            response.status(500).json({ error: "Erro ao criar Espécie." });
        }
    }
}