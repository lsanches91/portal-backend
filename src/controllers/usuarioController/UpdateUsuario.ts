import { Request, Response } from "express";
import { prismaClient } from "../../database/prismaClient";
import jwt, { Jwt, JwtPayload } from 'jsonwebtoken'

export class UpdateUsuario {
  async handle(request: Request, response: Response) {
    const idSearch = parseInt(request.params.id);
    const {
        nome,
        cpf,
        telefone,
        logradouro,
        numero,
        bairro,
        cidade_id,
        cep,
        email,
        senha,
        nivel,
        imagem_path,
        situacao } = request.body;
        

    const usuario = await prismaClient.usuario.update({
        where: {
            id: idSearch
        },
        data: {            
            nome,
            cpf,
            telefone,
            logradouro,
            numero,
            bairro,
            cidade_id,
            cep,
            email,
            senha,
            nivel,
            imagem_path,
            situacao
        }
    })

   return response.json(usuario);
  }

  async ativar(request: Request, response: Response) {
    const token = request.params.token;

    const { id } = jwt.verify(token, process.env.JWT_PASS ?? "") as JwtPayload

    const usuario = await prismaClient.usuario.update({
        where: {
            id: id
        }, 
        data: {            
            situacao: "A"
        },
        include: {
          cidade: true
        }
    })

   return response.json(usuario);
  }
  
}