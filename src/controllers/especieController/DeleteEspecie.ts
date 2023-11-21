import { Request, Response } from "express";
import { prismaClient } from "../../database/prismaClient";

export class DeleteEspecie {
  async handle(request: Request, response: Response) {
    try{
      const idSearch = parseInt(request.params.id);
    
    const especie = await prismaClient.especie.delete({
        where: {
            id: idSearch
        }
    })

    return response.json(especie);

    }catch(erro){
    console.log(erro);
    response.status(500).json({ error: "Erro ao deletar Espécie." });
    }    
  }
}