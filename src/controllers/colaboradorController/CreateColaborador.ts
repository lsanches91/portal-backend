import { Request, Response } from "express";
import { prismaClient } from "../../database/prismaClient";

export class CreateColaborador {
  async handle(request: Request, response: Response) {
    try {
      const {
        usuario_id,
        ong_id,
        situacao,
        responsavel,
        cargo
      } = request.body;

      const colaborador = await prismaClient.colaborador.create({
        data: {
          usuario_id,
          ong_id,
          situacao,
          responsavel,
          cargo
        },
      });

      return response.json(colaborador);

    } catch (erro) {
      console.log(erro);
      response.status(500).json({ error: "Erro ao criar Colaborador." });
    }
  }
}