import { Request, Response } from "express";
import { prismaClient } from "../../database/prismaClient";

export class CreateColaborador {
  async handle(request: Request, response: Response) {
    
    const {
      usuario_id,
      ong_id,
      situacao
    } = request.body;

    const colaborador = await prismaClient.colaborador.create({
        data: {
            usuario_id,
            ong_id,
            situacao
        },
    });

    return response.json(colaborador);
  }
}