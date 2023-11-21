import { Request, Response } from "express";
import { prismaClient } from "../../database/prismaClient";

export class GetAllOng {
  async handle(request: Request, response: Response) {
    try {
      const ong = await prismaClient.ong.findMany({
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

    } catch (erro) {
      console.log(erro);
      response.status(500).json({ error: "Erro ao buscar todas as ONGs." });
    }
  }
}