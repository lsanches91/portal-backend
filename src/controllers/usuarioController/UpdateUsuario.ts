import { Request, Response } from "express";
import { prismaClient } from "../../database/prismaClient";

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
        cidade,
        cep,
        uf,
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
            cidade,
            cep,
            uf,
            email,
            senha,
            nivel,
            imagem_path,
            situacao  
        }
    })

    return response.json(usuario);
  }
}