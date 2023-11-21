import { Request, Response } from "express";
import { prismaClient } from "../../database/prismaClient";

export class GetAllCidade {
  async handle(request: Request, response: Response) {
    try {
      const cidades = await prismaClient.cidade.findMany()

      return response.json(cidades);

    } catch (erro) {
      console.log(erro);
      response.status(500).json({ error: "Erro ao buscar todas as Cidades." });
    }
  }
}