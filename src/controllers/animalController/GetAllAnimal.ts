import { Request, Response } from "express";
import { prismaClient } from "../../database/prismaClient";

export class GetAllAnimal {
  async handle(request: Request, response: Response) {
    try {
      const animal = await prismaClient.animal.findMany({
        include: {
          ong: true,
          raca: {
            include: {
              especie: true
            }
          }
        }
      }
      );

      //return response.json(animalRender.renderMany(animal));
      return response.json(animal);

    } catch (erro) {
      console.log(erro);
      response.status(500).json({ error: "Erro ao buscar todos os Animais." });
    }
  }

  async getDisponiveis(request: Request, response: Response) {
    try {
      const animais = await prismaClient.animal.findMany({
        where: {
          situacao: "D"
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
      });

      //return response.json(animalRender.renderMany(animal));
      return response.json(animais);

    } catch (erro) {
      console.log(erro);
      response.status(500).json({ error: "Erro ao buscar todos os Animais." });
    }
  }
}