import { Request, Response } from "express";
import { prismaClient } from "../../database/prismaClient";

export class DeleteOng {
  async handle(request: Request, response: Response) {
    const idSearch = parseInt(request.params.id);
    
    const ong = await prismaClient.ong.delete({
        where: {
            id: idSearch
        }
    })

    return response.json(ong);
  }
}