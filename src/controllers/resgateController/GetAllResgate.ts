import { Request, Response } from "express";
import { prismaClient } from "../../database/prismaClient";

export class GetAllResgate {
  async handle(request: Request, response: Response) {
    
    const resgate = await prismaClient.solicitacao_resgate.findMany()

    return response.json(resgate);
  }
}