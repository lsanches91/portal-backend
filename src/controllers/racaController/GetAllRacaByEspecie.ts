import { Request, Response } from "express";
import { prismaClient } from "../../database/prismaClient";

export class GetAllRacaByEspecie {
  async handle(request: Request, response: Response) {
    try{
        const especie_id = parseInt(request.params.especie_id);
    
    const raca = await prismaClient.raca.findMany({
        where:{
            especie_id: especie_id
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