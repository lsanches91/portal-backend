import { Request, Response } from "express";
import { prismaClient } from "../../database/prismaClient";

export class GetAllResgateByOng {
    async handle(request: Request, response: Response) {
        try {
            const ong_id = parseInt(request.params.ong_id);

            const resgate = await prismaClient.solicitacao_resgate.findMany({
                where: {
                    ong_id: ong_id,
                },
                include: {
                    usuario: true,
                    ong: true, 
                    cidade: {
                        include: {
                            estado: true
                        }
                    }
                }
            })

            return response.json(resgate);

        } catch (erro) {
            console.log(erro);
            response.status(500).json({ error: "Erro ao buscar todas as Solicitações de Resgate da ONG selecionada." });
        }
    }
}