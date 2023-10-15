import { Request, Response } from "express";
import { prismaClient } from "../../database/prismaClient";

export class GetAllOng {
  async handle(request: Request, response: Response) {
    
    const ong = await prismaClient.ong.findMany({
      include: {
        animal: true,
      },
    })

    return response.json(ong);
  }
}