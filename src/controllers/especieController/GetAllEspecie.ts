import { Request, Response } from "express";
import { prismaClient } from "../../database/prismaClient";

export class GetAllEspecie {
  async handle(request: Request, response: Response) {
    try {
      const especie = await prismaClient.especie.findMany()

      return response.json(especie);

    } catch (erro) {
      console.log(erro);
      response.status(500).json({ error: "Erro ao buscar todas as Espécies." });
    }
  }
}