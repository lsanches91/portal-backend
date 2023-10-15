import { Request, Response } from "express";
import { prismaClient } from "../../database/prismaClient";

export class DeleteResgate {
  async handle(request: Request, response: Response) {
    const is_usuario = parseInt(request.params.usuario_id);
    const id = parseInt(request.params.id);
    
    
    const resgate = await prismaClient.solicitacao_resgate.delete({
        where: {
            id_usuario_id: {usuario_id: is_usuario, id},
        }
    })

    return response.json(resgate);
  }
}