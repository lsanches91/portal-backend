import { Request, Response } from "express";
import { prismaClient } from "../../database/prismaClient";

export class CreateAdocao {
  async handle(request: Request, response: Response) {
    try {
      const {
        usuario_id,
        animal_id,
        ong_id,
        maior_idade,
        possui_animais,
        motivo,
        situacao
      } = request.body;

      const adocao = await prismaClient.solicitacao_adocao.create({
        data: {
          usuario: { connect: { id: usuario_id } },
          animal: { connect: { id: animal_id } },
          ong: { connect: { id: ong_id } },
          maior_idade,
          possui_animais,
          motivo,
          situacao,
          data_criacao: new Date()
        },
      });

      return response.json(adocao);

    } catch (erro) {
      console.log(erro);
      response.status(500).json({ error: "Erro ao criar Solicitação de Adoção." });
    }

  }
}