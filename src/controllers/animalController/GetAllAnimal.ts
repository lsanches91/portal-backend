import { Request, Response } from "express";
import { prismaClient } from "../../database/prismaClient";

export class GetAllAnimal {
  async handle(request: Request, response: Response) {
    
    const animal = await prismaClient.animal.findMany()

    return response.json(animal);
  }
}