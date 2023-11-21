import { Request, Response } from "express";
import { prismaClient } from "../../database/prismaClient";

export class GetAllRaca {
  async handle(request: Request, response: Response) {
    try {
      const raca = await prismaClient.raca.findMany({
        include: {
            especie: true
        }
      })

      return response.json(raca);

    } catch (erro) {
      console.log(erro);
      response.status(500).json({ error: "Erro ao buscar todas as Raças." });
    }
  }
}