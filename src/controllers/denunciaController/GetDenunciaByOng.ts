import { Request, Response } from "express";
import { prismaClient } from "../../database/prismaClient";

export class GetDenunciaByOng {
    async handle(request: Request, response: Response) {
        try {
            const ong_id = parseInt(request.params.ong_id);

            const denuncia = await prismaClient.denuncia.findFirst({
                where: {
                    ong_id: ong_id,
                },
                include: {
                    usuario: true,
                    ong: true
                }
            })

            return response.json(denuncia);
        } catch (erro) {
            console.log(erro);
            response.status(404).json({ error: "Erro ao buscar Denúncia pela ONG." });
        }
    }
}