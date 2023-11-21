import { Request, Response } from "express";
import { prismaClient } from "../../database/prismaClient";

export class GetEspecieByNomeCientifico {
  async handle(request: Request, response: Response) {
    try{
      const nome_cientifico = request.params.nome_cientifico;
    
    const especie = await prismaClient.especie.findFirst({
        where:{
            nome_cientifico:nome_cientifico
        }
    })

    return response.json(especie);

    }catch(erro){
    console.log(erro);
    response.status(500).json({ error: "Erro ao buscar Espécie pelo Nome Científico." });
    }    
  }
}