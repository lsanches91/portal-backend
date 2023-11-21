import { Request, Response } from "express";
import { prismaClient } from "../../database/prismaClient";

export class GetDenunciaById {
    async handle(request: Request, response: Response) {
        try {
            const id = parseInt(request.params.id);


            const denuncia = await prismaClient.denuncia.findFirst({
                where: {
                    id: id,
                },
                include: {
                    usuario: true,
                    ong: true
                }
            })

            return response.json(denuncia);
        } catch (erro) {
            console.log(erro);
            response.status(404).json({ error: "Erro ao buscar Denúncia por ID." });
        }
    }
}