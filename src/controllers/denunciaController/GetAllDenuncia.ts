import { Request, Response } from "express";
import { prismaClient } from "../../database/prismaClient";

export class GetAllDenuncia {
  async handle(request: Request, response: Response) {
    
    const denuncia = await prismaClient.denuncia.findMany()

    return response.json(denuncia);
  }
}