import { Request, Response } from "express";
import { prismaClient } from "../../database/prismaClient";

export class GetAllEspecieBySituacao {
    async handle(request: Request, response: Response) {
        try {
            const situacao = request.params.situacao;
            const especie = await prismaClient.especie.findMany({
                where: {
                    situacao: situacao
                }
            })

            return response.json(especie);

        } catch (erro) {
            console.log(erro);
            response.status(500).json({ error: "Erro ao buscar todas as Espécies pela Situação." });
        }
    }
}