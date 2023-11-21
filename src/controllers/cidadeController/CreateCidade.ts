import { Request, Response } from "express";
import { prismaClient } from "../../database/prismaClient";

export class CreateCidade {
    async handle(request: Request, response: Response) {
        try {
            const {
                nome,
                estado_sigla
            } = request.body;

            let cidade = await prismaClient.cidade.findFirst({
                where: {
                    nome,
                    estado_sigla
                },
            });
            if(cidade){
                return response.status(400).json({ error: "Essa cidade já existe." });
            }

            cidade = await prismaClient.cidade.create({
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