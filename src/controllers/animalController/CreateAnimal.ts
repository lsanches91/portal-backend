import { Request, Response } from "express";
import { prismaClient } from "../../database/prismaClient";

export class CreateAnimal {
  async handle(request: Request, response: Response) {
    
    console.log(request.file);
    try {
      const {
        nome,
        idade,
        porte,
        descricao,
        situacao,
        foto_path,
        ong_id,
        raca_id
      } = request.body;
      
      const animal = await prismaClient.animal.create({
        data: {
          nome,
          idade,
          porte,
          descricao,
          situacao,
          foto_path,
          ong_id: parseInt(ong_id),
          raca_id: parseInt(raca_id)
        },
      });

      return response.json(animal);

    } catch (erro) {
      console.log(erro);
      response.status(500).json({ error: "Erro ao cadastrar Animal." });
    }
  }
}