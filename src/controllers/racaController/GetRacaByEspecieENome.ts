import { Request, Response } from "express";
import { prismaClient } from "../../database/prismaClient";

export class GetRacaByEspecieENome {
  async handle(request: Request, response: Response) {
    try{
        const nome = request.params.nome;
        const especie_id = parseInt(request.params.especie_id);
    
    const raca = await prismaClient.raca.findFirst({
        where:{
            nome: nome,
            especie_id: especie_id
        }
    })

    return response.json(raca);

    }catch(erro){
    console.log(erro);
    response.status(500).json({ error: "Erro ao buscar Raça pelo ID." });
    }    
  }
}