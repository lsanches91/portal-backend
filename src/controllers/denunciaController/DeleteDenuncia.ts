import { Request, Response } from "express";
import { prismaClient } from "../../database/prismaClient";

export class DeleteDenuncia {
  async handle(request: Request, response: Response) {
    const usuario_id = parseInt(request.params.usuario_id);
    const ong_id = parseInt(request.params.ong_id);
    const id = parseInt(request.params.id);
    
    
    const denuncia = await prismaClient.denuncia.delete({
        where: {
            id_usuario_id_ong_id: {usuario_id, ong_id, id},
        }
    })

    return response.json(denuncia);
  }
}