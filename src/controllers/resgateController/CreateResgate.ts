import { Request, Response } from "express";
import { prismaClient } from "../../database/prismaClient";

export class CreateResgate {
  async handle(request: Request, response: Response) {
    try {
      const {
        descricao,
        especie,
        logradouro_aproximado,
        numero_aproximado,
        cidade_id,
        cep,
        ponto_referencia,
        situacao,
        usuario_id
      } = request.body;

      const resgate = await prismaClient.solicitacao_resgate.create({
        data: {
          descricao,
          especie,
          logradouro_aproximado,
          numero_aproximado,
          cidade_id,
          cep,
          ponto_referencia,
          situacao,
          usuario_id
        },
      });

      return response.json(resgate);

    } catch (erro) {
      console.log(erro);
      response.status(500).json({ error: "Erro ao criar Solicitação de Resgate." });
    }
  }
}