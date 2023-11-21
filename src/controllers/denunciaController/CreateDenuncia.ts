import { Request, Response } from "express";
import { prismaClient } from "../../database/prismaClient";

export class CreateDenuncia {
  async handle(request: Request, response: Response) {
    try {
      const {
        usuario_id,
        ong_id,
        mensagem,
        arquivo_path
      } = request.body;

      const buscaDenuncia = await prismaClient.denuncia.findFirst({
        where:{
          usuario_id: parseInt(usuario_id),
          ong_id: parseInt(ong_id),
          mensagem
        }
      })
      if(buscaDenuncia){
        return response.status(400).json({ error: "Uma denúncia já foi realizada com essas informações" });
      }

      const denuncia = await prismaClient.denuncia.create({
        data: {
          usuario_id: parseInt(usuario_id),
          ong_id: parseInt(ong_id),
          mensagem,
          arquivo_path
        },
      });

      return response.json(denuncia);

    } catch (erro) {
      console.log(erro);
      response.status(500).json({ error: "Erro ao criar Denúncia: "+erro+"" });
    }
  }
}