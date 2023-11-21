import { Request, Response } from "express";
import { prismaClient } from "../../database/prismaClient";

export class GetUsuarioById {
  async handle(request: Request, response: Response) {
    try {
      const idSearch = parseInt(request.params.id);

      const usuario = await prismaClient.usuario.findUnique({
        where: {
          id: idSearch
        },
        include: {
          cidade: {
            include:{
                estado:true
            }
          }
        }
      })

      return response.json(usuario);

    } catch (erro) {
      console.log(erro);
      response.status(500).json({ error: "Erro ao buscar Usuário pelo ID." });
    }

  }
}