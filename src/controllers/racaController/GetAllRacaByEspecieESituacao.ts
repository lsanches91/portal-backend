import { Request, Response } from "express";
import { prismaClient } from "../../database/prismaClient";

export class GetAllRacaByEspecieESituacao {
  async handle(request: Request, response: Response) {
    try{
        const especie_id = parseInt(request.params.especie_id);
        const situacao = request.params.situacao;
    
    const raca = await prismaClient.raca.findMany({
        where:{
            especie_id: especie_id,
            situacao: situacao
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