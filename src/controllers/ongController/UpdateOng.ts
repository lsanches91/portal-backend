import { Request, Response } from "express";
import { prismaClient } from "../../database/prismaClient";

export class UpdateOng {
  async handle(request: Request, response: Response) {
    try {
      const idSearch = parseInt(request.params.id);
      const {
        nome_fantasia,
        cnpj,
        email,
        telefone,
        logradouro,
        numero,
        bairro,
        cep,
        cidade_id,
        descricao,
        situacao,
        logo_path,
        usuario_id
      } = request.body;

      const ong = await prismaClient.ong.update({
        where: {
          id: idSearch
        },
        data: {
          nome_fantasia,
          cnpj,
          email,
          telefone,
          logradouro,
          numero,
          bairro,
          cep,
          cidade_id,
          descricao,
          situacao,
          logo_path,
          usuario_id
        }
      })

      return response.json(ong);
    } catch (erro) {
      console.log(erro);
      response.status(500).json({ error: "Erro ao atualizar ONG." });
    }
  }
}