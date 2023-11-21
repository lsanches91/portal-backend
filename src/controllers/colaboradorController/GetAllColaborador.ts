import { Request, Response } from "express";
import { prismaClient } from "../../database/prismaClient";

export class GetAllColaborador {
  async handle(request: Request, response: Response) {
    try {
      const colaborador = await prismaClient.colaborador.findMany({
        include:{
          ong:true
        }
      })

      return response.json(colaborador);

    } catch (erro) {
      console.log(erro);
      response.status(500).json({ error: "Erro ao buscar todos os Colaboradores." });
    }
  }
}