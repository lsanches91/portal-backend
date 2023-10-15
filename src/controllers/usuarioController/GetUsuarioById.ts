import { Request, Response } from "express";
import { prismaClient } from "../../database/prismaClient";

export class GetUsuarioById {
  async handle(request: Request, response: Response) {
    const idSearch = parseInt(request.params.id);
    
    const usuario = await prismaClient.usuario.findUnique({
        where:{
            id:idSearch
        }
    })

    return response.json(usuario);
  }
}