import { Request, Response } from "express";
import { prismaClient } from "../../database/prismaClient";

export class GetOngById {
  async handle(request: Request, response: Response) {
    const idSearch = parseInt(request.params.id);
    
    const ong = await prismaClient.ong.findUnique({
        where:{
            id:idSearch
        },
        include: {
          animal: true,
        },
    })

    return response.json(ong);
  }
}