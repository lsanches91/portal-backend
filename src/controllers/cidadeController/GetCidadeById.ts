import { Request, Response } from "express";
import { prismaClient } from "../../database/prismaClient";

export class GetCidadeById {
  async handle(request: Request, response: Response) {
    try {
      const id = parseInt(request.params.id);

      const cidade = await prismaClient.cidade.findUnique({
        where: {
          id: id
        },
        include: {
          estado: true
        }
      })

      return response.json(cidade);

    } catch (erro) {
      console.log(erro);
      response.status(500).json({ error: "Erro ao buscar a cidade pelo ID." });
    }
  }
}