import { Request, Response } from "express";
import { prismaClient } from "../../database/prismaClient";

export class UpdateAdocao {
  async handle(request: Request, response: Response) {

    const usuario_id = parseInt(request.params.usuario_id);
    const animal_id = parseInt(request.params.animal_id);
    const ong_id = parseInt(request.params.ong_id);

    const {
        telefone,
        data_nascimento,
        possui_animais,
        motivo,
        situacao
      } = request.body;

    const adocao = await prismaClient.solicitacao_adocao.update({
        where: {
            usuario_id_animal_id_ong_id: {
            usuario_id,
            animal_id,
            ong_id,
          },
        },
        data: {
            telefone,
            data_nascimento,
            possui_animais,
            motivo,
            situacao
        },
    });

    return response.json(adocao);
  }
}