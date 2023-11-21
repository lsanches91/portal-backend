import { Request, Response } from "express";
import { prismaClient } from "../../database/prismaClient";

export class GetAllEstado {
  async handle(request: Request, response: Response) {
    try {
      const estado = await prismaClient.estado.findMany()

      return response.json(estado);

    } catch (erro) {
      console.log(erro);
      response.status(500).json({ error: "Erro ao buscar todos os Estados." });
    }
  }
}