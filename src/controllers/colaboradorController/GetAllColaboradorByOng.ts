import { Request, Response } from "express";
import { prismaClient } from "../../database/prismaClient";

export class GetAllColaboradorByOng {
  async handle(request: Request, response: Response) {
    const ong_id = parseInt(request.params.ong_id);
    try {
      const colaborador = await prismaClient.colaborador.findMany({
        where:{
            ong_id: ong_id
        },
        include:{
            usuario: true
        }
      })

      return response.json(colaborador);

    } catch (erro) {
      console.log(erro);
      response.status(500).json({ error: "Erro ao buscar todos os Colaboradores." });
    }
  }
}