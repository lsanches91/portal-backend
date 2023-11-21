import { Request, Response } from "express";
import { prismaClient } from "../../database/prismaClient";

export class GetAllCidadeByEstado {
    async handle(request: Request, response: Response) {
        try {
            const estado_sigla = request.params.estado_sigla;

            const cidades = await prismaClient.cidade.findMany({
                where: {
                    estado_sigla: estado_sigla
                },
                include: {
                    estado: true
                },
                orderBy: {
                  nome: 'asc' // ou 'desc' para ordenação decrescente
                }
            })

            return response.json(cidades);

        } catch (erro) {
            console.log(erro);
            response.status(500).json({ error: "Erro ao buscar a Cidade pelo Estado." });
        }
    }
}