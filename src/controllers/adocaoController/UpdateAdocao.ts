import { Request, Response } from "express";
import { prismaClient } from "../../database/prismaClient";

export class UpdateAdocao {
  async handle(request: Request, response: Response) {
    try {
      const id = parseInt(request.params.id);
      const usuario_id = parseInt(request.params.usuario_id);
      const animal_id = parseInt(request.params.animal_id);
      const ong_id = parseInt(request.params.ong_id);

      const {
        maior_idade,
        possui_animais,
        motivo,
        situacao
      } = request.body;

      const adocao = await prismaClient.solicitacao_adocao.update({
        where: {
          id_usuario_id_animal_id_ong_id: {
            id,
            usuario_id,
            animal_id,
            ong_id,
          },
        },
        data: {
          maior_idade,
          possui_animais,
          motivo,
          situacao
        },
      });

      return response.json(adocao);

    } catch (erro) {
      console.log(erro);
      response.status(500).json({ error: "Erro ao atualizar Solicitação de Adoção." });
    }

  }
}