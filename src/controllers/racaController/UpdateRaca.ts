import { Request, Response } from "express";
import { prismaClient } from "../../database/prismaClient";

export class UpdateRaca {
    async handle(request: Request, response: Response) {
        try {
            const id = parseInt(request.params.id);
            const {
                nome,
                situacao,
                especie_id
            } = request.body;

            const raca = await prismaClient.raca.update({
                where: {
                    id: id
                },
                data: {
                    nome,
                    situacao,
                    especie_id: parseInt(especie_id)
                }
            })

            return response.json(raca);
        } catch (erro) {
            console.log(erro);
            response.status(500).json({ error: "Erro ao atualizar Raça." });
        }
    }
}