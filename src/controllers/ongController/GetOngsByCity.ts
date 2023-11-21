import { Request, Response } from "express";
import { prismaClient } from "../../database/prismaClient";

export class GetOngsByCity {
  async handle(request: Request, response: Response) {
    try {
      const citySearch = request.params.city_id;

      const ong = await prismaClient.ong.findMany({
        where: {
          cidade_id: parseInt(citySearch)
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

    } catch (erro) {
      console.log(erro);
      response.status(500).json({ error: "Erro ao buscar ONG pela cidade." });
    }
  }
}