import { Request, Response } from "express";
import { prismaClient } from "../../database/prismaClient";

export class UpdateDenuncia {
  async handle(request: Request, response: Response) {
    try {
      const usuario_id = parseInt(request.params.usuario_id);
      const ong_id = parseInt(request.params.ong_id);
      const id = parseInt(request.params.id);

      const {
        mensagem,
        arquivo_path
      } = request.body;

      const colaborador = await prismaClient.denuncia.update({
        where: {
          id_usuario_id_ong_id: { usuario_id, ong_id, id },
        },
        data: {
          mensagem,
          arquivo_path
        }
      })

      return response.json(colaborador);

    } catch (erro) {
      console.log(erro);
      response.status(500).json({ error: "Erro ao atualizar Denúncia." });
    }
  }
}