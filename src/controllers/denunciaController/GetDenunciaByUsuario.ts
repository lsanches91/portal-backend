import { Request, Response } from "express";
import { prismaClient } from "../../database/prismaClient";

export class GetDenunciaByUsuario {
    async handle(request: Request, response: Response) {
        try {
            const usuario_id = parseInt(request.params.usuario_id);

            const denuncia = await prismaClient.denuncia.findFirst({
                where: {
                    usuario_id: usuario_id,
                },
                include: {
                    usuario: true,
                    ong: true
                }
            })

            return response.json(denuncia);
        } catch (erro) {
            console.log(erro);
            response.status(404).json({ error: "Erro ao buscar Denúncia pelo Usuário." });
        }
    }
}