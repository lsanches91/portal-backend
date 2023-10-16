import { Request, Response } from "express";
import { prismaClient } from "../../database/prismaClient";
import bcrypt from 'bcrypt';

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

    const usuarioExiste = await prismaClient.usuario.findUnique({
      where: {
        email: email
      }
    })

    if (!usuarioExiste) {
      const hashSenha = await bcrypt.hash(senha, 10);

      const novoUsuario = await prismaClient.usuario.create({
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
          senha: hashSenha,
          nivel,
          imagem_path,
          situacao
        },
      });

      const {senha: _, ...usuario} = novoUsuario;
      return response.status(201).json(usuario);
    }
  }
}