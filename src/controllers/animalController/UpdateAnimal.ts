import { Request, Response } from "express";
import { prismaClient } from "../../database/prismaClient";

export class UpdateAnimal {
  async handle(request: Request, response: Response) {
    const idSearch = parseInt(request.params.id);
    
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
        

    const animal = await prismaClient.animal.update({
        where: {
            id: idSearch
        },
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
        }
    })

    return response.json(animal);
  }
}