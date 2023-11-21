import { Request, Response } from "express";
import { prismaClient } from "../../database/prismaClient";

export class GetRacaById {
  async handle(request: Request, response: Response) {
    try{
        const id = parseInt(request.params.id);
    
    const raca = await prismaClient.raca.findUnique({
        where:{
            id: id
        },
        include: {
          especie: true
      }
    })

    return response.json(raca);

    }catch(erro){
    console.log(erro);
    response.status(500).json({ error: "Erro ao buscar Raça pelo ID." });
    }    
  }
}