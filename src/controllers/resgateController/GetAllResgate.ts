import { Request, Response } from "express";
import { prismaClient } from "../../database/prismaClient";

export class GetAllResgate {
  async handle(request: Request, response: Response) {
    try {
      const resgate = await prismaClient.solicitacao_resgate.findMany({
        include: {
          usuario: true,
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
      response.status(500).json({ error: "Erro ao buscar todas as Solicitações de Resgate." });
    }
  }
}