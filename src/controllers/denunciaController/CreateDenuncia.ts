import { Request, Response } from "express";
import { prismaClient } from "../../database/prismaClient";

export class CreateDenuncia {
  async handle(request: Request, response: Response) {
    
    const {
      usuario_id,
      ong_id,
      mensagem,
      arquivo_path
    } = request.body;

    const denuncia = await prismaClient.denuncia.create({
        data: {
            usuario_id,
            ong_id,
            mensagem,
            arquivo_path
        },
    });

    return response.json(denuncia);
  }
}