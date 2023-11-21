import { Request, Response } from "express";
import { prismaClient } from "../../database/prismaClient";

export class DeleteRaca {
  async handle(request: Request, response: Response) {
    try{
      const id = parseInt(request.params.id);
    
    const especie = await prismaClient.raca.delete({
        where: {
            id: id
        }
    })

    return response.json(especie);

    }catch(erro){
    console.log(erro);
    response.status(500).json({ error: "Erro ao deletar Raça." });
    }    
  }
}