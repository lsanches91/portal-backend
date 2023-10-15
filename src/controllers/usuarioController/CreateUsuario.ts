import { Request, Response } from "express";
import { prismaClient } from "../../database/prismaClient";

export class CreateUsuario {
  async handle(request: Request, response: Response) {
    const { 
            nome,
            cpf,
            telefone,
            logradouro,
            numero,
            bairro,
            cidade,
            cep,
            uf,
            email,
            senha,
            nivel,
            imagem_path,
            situacao } = request.body;

    const usuario = await prismaClient.usuario.create({
        data: {
            nome,
            cpf,
            telefone,
            logradouro,
            numero,
            bairro,
            cidade,
            cep,
            uf,
            email,
            senha,
            nivel,
            imagem_path,
            situacao
        },
    });

    return response.json(usuario);
  }
}