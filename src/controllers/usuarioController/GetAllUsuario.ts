import { Request, Response } from "express";
import { prismaClient } from "../../database/prismaClient";

export class GetAllUsuario {
  async handle(request: Request, response: Response) {
    
    const usuario = await prismaClient.usuario.findMany()

    return response.json(usuario);
  }
}