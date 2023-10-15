import { Request, Response } from "express";
import { prismaClient } from "../../database/prismaClient";

export class DeleteAdocao {
  async handle(request: Request, response: Response) {

    const usuario_id = parseInt(request.params.usuario_id);
    const animal_id = parseInt(request.params.animal_id);
    const ong_id = parseInt(request.params.ong_id);

    const adocao = await prismaClient.solicitacao_adocao.delete({
        where: {
            usuario_id_animal_id_ong_id: {
            usuario_id,
            animal_id,
            ong_id,
          },
        },
    });

    return response.json(adocao);
  }
}