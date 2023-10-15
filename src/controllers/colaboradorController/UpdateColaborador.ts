import { Request, Response } from "express";
import { prismaClient } from "../../database/prismaClient";

export class UpdateColaborador {
  async handle(request: Request, response: Response) {
    const usuario_id = parseInt(request.params.usuario_id);
    const ong_id = parseInt(request.params.ong_id);
    
    const {
        situacao
    } = request.body;
    
    const colaborador = await prismaClient.colaborador.update({
        where: {
            usuario_id_ong_id: {usuario_id, ong_id},
        },
        data: {
            situacao
        }
    })

    return response.json(colaborador);
  }
}