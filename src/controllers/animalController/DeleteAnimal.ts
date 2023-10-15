import { Request, Response } from "express";
import { prismaClient } from "../../database/prismaClient";

export class DeleteAnimal {
  async handle(request: Request, response: Response) {
    const idSearch = parseInt(request.params.id);
    
    const animal = await prismaClient.animal.delete({
        where: {
            id: idSearch
        }
    })

    return response.json(animal);
  }
}