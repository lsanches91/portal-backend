import { Request, Response } from "express";
import { prismaClient } from "../../database/prismaClient";

export class DeleteUsuario {
  async handle(request: Request, response: Response) {
    const idSearch = parseInt(request.params.id);
    
    const usuario = await prismaClient.usuario.delete({
        where: {
            id: idSearch
        }
    })

    return response.json(usuario);
  }
}