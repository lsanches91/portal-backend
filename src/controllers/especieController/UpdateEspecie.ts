import { Request, Response } from "express";
import { prismaClient } from "../../database/prismaClient";

export class UpdateEspecie {
    async handle(request: Request, response: Response) {
        try {
            const id = parseInt(request.params.id);
            const {
                nome_comum,
                nome_cientifico,
                situacao,
            } = request.body;

            const especie = await prismaClient.especie.update({
                where: {
                    id: id
                },
                data: {
                    nome_comum,
                    nome_cientifico,
                    situacao,
                }
            })

            return response.json(especie);
        } catch (erro) {
            console.log(erro);
            response.status(500).json({ error: "Erro ao atualizar Espécie." });
        }
    }
}