import { Request, Response } from "express";
import { prismaClient } from "../../database/prismaClient";

export class GetAllRacaBySituacao {
    async handle(request: Request, response: Response) {
        try {
            const situacao = request.params.situacao;
            const raca = await prismaClient.raca.findMany({
                where: {
                    situacao: situacao
                }
            })

            return response.json(raca);

        } catch (erro) {
            console.log(erro);
            response.status(500).json({ error: "Erro ao buscar todas as Raças pela Situação." });
        }
    }
}