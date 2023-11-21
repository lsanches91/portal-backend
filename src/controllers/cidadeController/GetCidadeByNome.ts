import { Request, Response } from "express";
import { prismaClient } from "../../database/prismaClient";

export class GetCidadeByNome {
    async handle(request: Request, response: Response) {
        try {
            const estado_sigla = request.params.estado_sigla;
            const nome = request.params.nome

            const cidade = await prismaClient.cidade.findFirst({
                where: {
                  estado_sigla: estado_sigla,
                  nome: nome,
                },
                include: {
                  estado: true,
                },
              });

            return response.json(cidade);

        } catch (erro) {
            console.log(erro);
            response.status(500).json({ error: "Erro ao buscar a Cidade." });
        }
    }
}