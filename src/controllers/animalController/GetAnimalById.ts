import { Request, Response } from "express";
import { prismaClient } from "../../database/prismaClient";

export class GetAnimalById {
  async handle(request: Request, response: Response) {
    try {
      const id = parseInt(request.params.id);

      const animal = await prismaClient.animal.findUnique({
        where: {
          id: id
        },
        include: {
          ong: {
            include: {
              cidade: {
                include: {
                  estado: true
                }
              }
            }
          },
          raca: {
            include: {
              especie: true
            }
          }
        }
      })

      return response.json(animal);

    } catch (erro) {
      console.log(erro);
      response.status(500).json({ error: "Erro ao buscar Animal pelo ID." });
    }
  }
}