import { Request, Response } from "express";
import { prismaClient } from "../../database/prismaClient";

export class GetAllAdocaoByOngESituacao {
  async handle(request: Request, response: Response) {
    try {
      const ong_id = parseInt(request.params.ong_id);
      const situacao = request.params.situacao;

      const adocao = await prismaClient.solicitacao_adocao.findMany({
        where: {
            ong_id: ong_id,
            situacao: situacao
        },
        include:{
            animal:true,
            usuario:true,
            ong:true,
        }
      });

      return response.json(adocao);

    } catch (erro) {
      console.log(erro);
      response.status(500).json({ error: "Erro ao buscar Solicitação de Adoção por ONG." });
    }

  }
}