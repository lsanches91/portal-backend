import { Request, Response } from "express";
import { prismaClient } from "../../database/prismaClient";

export class GetResgateById {
  async handle(request: Request, response: Response) {
    try {
      const is_usuario = parseInt(request.params.usuario_id);
      const id = parseInt(request.params.id);


      const resgate = await prismaClient.solicitacao_resgate.findUnique({
        where: {
          id_usuario_id: { usuario_id: is_usuario, id },
        },
        include: {
            usuario: true,
            ong: true, 
            cidade: {
                include: {
                    estado: true
                }
            }
        }
      })

      return response.json(resgate);

    } catch (erro) {
      console.log(erro);
      response.status(500).json({ error: "Erro ao buscar Solicitação de Resgate por ID." });
    }
  }
}