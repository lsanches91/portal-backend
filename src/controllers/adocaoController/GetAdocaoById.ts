import { Request, Response } from "express";
import { prismaClient } from "../../database/prismaClient";

export class GetAdocaoById {
  async handle(request: Request, response: Response) {
    try {
      const id = parseInt(request.params.id);
      const usuario_id = parseInt(request.params.usuario_id);
      const animal_id = parseInt(request.params.animal_id);
      const ong_id = parseInt(request.params.ong_id);

      const adocao = await prismaClient.solicitacao_adocao.findUnique({
        where: {
          id_usuario_id_animal_id_ong_id: {
            id,
            usuario_id,
            animal_id,
            ong_id,
          }
        },
        include: {
          usuario: true,
          animal: true          
        }
      });

      return response.json(adocao);

    } catch (erro) {
      console.log(erro);
      response.status(500).json({ error: "Erro ao buscar Solicitação de Adoção por ID." });
    }

  }
}