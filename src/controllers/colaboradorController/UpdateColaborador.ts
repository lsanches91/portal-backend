import { Request, Response } from "express";
import { prismaClient } from "../../database/prismaClient";

export class UpdateColaborador {
  async handle(request: Request, response: Response) {
    try {
      const usuario_id = parseInt(request.params.usuario_id);
      const ong_id = parseInt(request.params.ong_id);

      const {
        situacao,
        responsavel,
        cargo
      } = request.body;

      const colaborador = await prismaClient.colaborador.update({
        where: {
          usuario_id_ong_id: { usuario_id, ong_id },
        },
        data: {
          situacao,
          responsavel,
          cargo
        }
      })

      return response.json(colaborador);

    } catch (erro) {
      console.log(erro);
      response.status(500).json({ error: "Erro ao atualizar Colaborador." });
    }
  }
}