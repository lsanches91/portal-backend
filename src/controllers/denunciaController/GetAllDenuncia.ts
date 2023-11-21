import { Request, Response } from "express";
import { prismaClient } from "../../database/prismaClient";

export class GetAllDenuncia {
  async handle(request: Request, response: Response) {
    try {
      const denuncia = await prismaClient.denuncia.findMany({
        include: {
          usuario: true,
          ong: true
        }
      })

      return response.json(denuncia);

    } catch (erro) {
      console.log(erro);
      response.status(500).json({ error: "Erro ao buscar todas as Denúncias." });
    }
  }
}