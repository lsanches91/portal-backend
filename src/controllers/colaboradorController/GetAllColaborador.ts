import { Request, Response } from "express";
import { prismaClient } from "../../database/prismaClient";

export class GetAllColaborador {
  async handle(request: Request, response: Response) {
    
    const colaborador = await prismaClient.colaborador.findMany()

    return response.json(colaborador);
  }
}