import { Request, Response } from "express";
import { prismaClient } from "../../database/prismaClient";

export class GetOngBySituacao {
    async handle(request: Request, response: Response) {
        const situacaoSearch = request.params.situacao;

        const ong = await prismaClient.ong.findMany({
            where: {
                situacao: situacaoSearch
            },
            include: {
                animal: true,
                cidade: {
                  include: {
                    estado: true
                  }
                }
            },
        })

        return response.json(ong);
    }
}