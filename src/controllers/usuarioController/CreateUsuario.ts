import { Request, Response } from "express";
import { prismaClient } from "../../database/prismaClient";
import bcrypt from 'bcrypt';
import jwt, { Jwt, JwtPayload } from 'jsonwebtoken';
import { sendEmail } from '../../services/emailService';

export class CreateUsuario {
  async handle(request: Request, response: Response) {
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

    const administrador = await prismaClient.usuario.findFirst({
      where: {
        nivel: "A"
      }
    });
    let novoNivel = nivel

    if (!administrador)
      novoNivel = "A"

    console.log(email, cpf)
    let usuarioExiste = await prismaClient.usuario.findFirst({
      where: {
        OR: [
          { email: email },
          { cpf: cpf }
        ]
      }
    });

    if (usuarioExiste){
      return response.status(406).json({ error: "Já existe um usuário com esse E-mail ou CPF." });
    }

    const hashSenha = await bcrypt.hash(senha, 7);
    try {
      const usuario = await prismaClient.usuario.create({
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
          senha: hashSenha,
          nivel: novoNivel,
          imagem_path,
          situacao
        },
      });

      if (usuario) {
        if (usuario.situacao == "P") {
          const token = jwt.sign({ id: usuario.id }, process.env.JWT_PASS ?? "", {})

          const html = "<h3>Olá! " + usuario.nome + ", clique no botão para realizar a ativação da sua conta no PAPA</h3><br/><a href='" + process.env.FRONTEND_URL + "/ativar/" + token + "'><button class='botao' style='border: solid 1px blue; border-radius: 5px; color: white; background-color: blue; padding: 10px;'><b>Ativar Conta</b></button></a>"

          sendEmail(usuario.email, "Ativação de conta PAPA", html);

          return response.status(201).json(usuario);
        }
      }
    } catch (erro) {
      console.log(erro);
      response.status(500).json({ error: "Erro ao criar o Usuário." });
    }
  }
}