import { Request, Response } from "express";
import { prismaClient } from "../../database/prismaClient";

export class GetAllColaboradorByUsuario {
  async handle(request: Request, response: Response) {
    const usuario_id = parseInt(request.params.usuario_id);
    try {
      const colaborador = await prismaClient.colaborador.findMany({
        where:{
            usuario_id: usuario_id,
            situacao: "Ativado"
        },
        include:{
            ong:{
                include:{
                    animal:true
                }
            }            
        }
      })

      return response.json(colaborador);

    } catch (erro) {
      console.log(erro);
      response.status(500).json({ error: "Erro ao buscar todos os Colaboradores." });
    }
  }
}