import { Request, Response } from "express";
import { prismaClient } from "../../database/prismaClient";

export class GetEspecieByNomeComum {
  async handle(request: Request, response: Response) {
    try{
      const nome_comum = request.params.nome_comum;
    
    const especie = await prismaClient.especie.findFirst({
        where:{
            nome_comum:nome_comum
        }
    })

    return response.json(especie);

    }catch(erro){
    console.log(erro);
    response.status(500).json({ error: "Erro ao buscar Espécie pelo Nome Comum." });
    }    
  }
}