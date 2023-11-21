import { Request, Response } from "express";
import { prismaClient } from "../../database/prismaClient";

export class CreateRaca {
    async handle(request: Request, response: Response) {
        try {
            const {
                nome,
                situacao,
                especie_id
            } = request.body;

            const raca = await prismaClient.raca.create({
                data: {
                    nome,
                    situacao,
                    especie_id: parseInt(especie_id)
                },
            });

            return response.json(raca);

        } catch (erro) {
            console.log(erro);
            response.status(500).json({ error: "Erro ao criar Raça." });
        }
    }
}