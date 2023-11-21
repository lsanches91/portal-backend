import { Request, Response } from "express";
import { prismaClient } from "../../database/prismaClient";

export class GetOngById {
  async handle(request: Request, response: Response) {
    try{
      const idSearch = parseInt(request.params.id);
    
    const ong = await prismaClient.ong.findUnique({
        where:{
            id:idSearch
        },
        include: {
          animal: true,
          cidade: {
            include: {
              estado: true
            }
          }
        },
    })

    return response.json(ong);

    }catch(erro){
    console.log(erro);
    response.status(500).json({ error: "Erro ao buscar ONG pelo ID." });
    }    
  }
}