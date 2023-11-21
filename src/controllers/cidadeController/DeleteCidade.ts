import { Request, Response } from "express";
import { prismaClient } from "../../database/prismaClient";

export class DeleteCidade {
  async handle(request: Request, response: Response) {
    try{
      const id = parseInt(request.params.id);
    
    const cidade = await prismaClient.cidade.delete({
        where: {
            id: id
        }
    })

    return response.json(cidade);

    }catch(erro){
    console.log(erro);
    response.status(500).json({ error: "Erro ao deletar a Cidade." });
    }    
  }
}