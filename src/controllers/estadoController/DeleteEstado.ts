import { Request, Response } from "express";
import { prismaClient } from "../../database/prismaClient";

export class DeleteEstado {
  async handle(request: Request, response: Response) {
    try{
      const sigla = request.params.sigla;
    
    const estado = await prismaClient.estado.delete({
        where: {
            sigla: sigla
        }
    })

    return response.json(estado);

    }catch(erro){
    console.log(erro);
    response.status(500).json({ error: "Erro ao deletar o Estado." });
    }    
  }
}