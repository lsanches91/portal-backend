import { Request, Response } from "express";
import { prismaClient } from "../../database/prismaClient";

export class CreateAnimal {
  async handle(request: Request, response: Response) {
    
    const {
      nome,
      especie,
      idade,
      porte,
      raca,
      descricao,
      situacao,
      foto_path,
      ong_id
    } = request.body;

    const animal = await prismaClient.animal.create({
        data: {
          nome,
          especie,
          idade,
          porte,
          raca,
          descricao,
          situacao,
          foto_path,
          ong_id
        },
    });

    return response.json(animal);
  }
}