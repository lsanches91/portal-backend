import { Request, Response } from "express";
import { prismaClient } from "../../database/prismaClient";

export class GetAllAdocao {
  async handle(request: Request, response: Response) {
    
    const adocao = await prismaClient.solicitacao_adocao.findMany()

    return response.json(adocao);
  }
}