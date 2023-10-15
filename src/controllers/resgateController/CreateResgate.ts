import { Request, Response } from "express";
import { prismaClient } from "../../database/prismaClient";

export class CreateResgate {
  async handle(request: Request, response: Response) {
    
    const {
      descricao,
      especie,
      logradouro_aproximado,
      numero_aproximado,
      bairro,
      cidade,
      cep,
      uf,
      ponto_referencia,
      situacao,
      usuario_id,
      ong_id
    } = request.body;

    const resgate = await prismaClient.solicitacao_resgate.create({
        data: {
            descricao,
            especie,
            logradouro_aproximado,
            numero_aproximado,
            bairro,
            cidade,
            cep,
            uf,
            ponto_referencia,
            situacao,
            usuario_id,
            ong_id
        },
    });

    return response.json(resgate);
  }
}