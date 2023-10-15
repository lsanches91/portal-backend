import { Request, Response } from "express";
import { prismaClient } from "../../database/prismaClient";

export class CreateOng {
  async handle(request: Request, response: Response) {
    
    const {
      nome_fantasia,
      cnpj,
      email,
      telefone,
      logradouro,
      numero,
      bairro,
      cep,
      uf,
      descricao,
      situacao,
      logo_path,
      usuario_id
    } = request.body;

    const ong = await prismaClient.ong.create({
        data: {
          nome_fantasia,
          cnpj,
          email,
          telefone,
          logradouro,
          numero,
          bairro,
          cep,
          uf,
          descricao,
          situacao,
          logo_path,
          usuario_id
        },
    });

    return response.json(ong);
  }
}