import { Request, Response } from "express";
import { prismaClient } from "../../database/prismaClient";

export class GetColaboradorById {
  async handle(request: Request, response: Response) {
    const usuario_id = parseInt(request.params.usuario_id);
    const ong_id = parseInt(request.params.ong_id);
    
    
    const colaborador = await prismaClient.colaborador.findUnique({
        where: {
            usuario_id_ong_id: {usuario_id, ong_id},
        }
    })

    return response.json(colaborador);
  }
}