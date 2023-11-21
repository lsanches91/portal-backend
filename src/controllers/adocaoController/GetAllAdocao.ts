import { Request, Response } from "express";
import { prismaClient } from "../../database/prismaClient";

export class GetAllAdocao {
  async handle(request: Request, response: Response) {
    try {
      const adocao = await prismaClient.solicitacao_adocao.findMany()

      return response.json(adocao);

    } catch (erro) {
      console.log(erro);
      response.status(500).json({ error: "Erro ao buscar todas as Solictações de Adoção." });
    }

  }
}