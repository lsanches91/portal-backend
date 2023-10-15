import { Request, Response } from "express";
import { prismaClient } from "../../database/prismaClient";

export class CreateAdocao {
  async handle(request: Request, response: Response) {
    
    const {
      usuario_id,
      animal_id,
      ong_id,
      telefone,
      data_nascimento,
      possui_animais,
      motivo,
      situacao
    } = request.body;

    const adocao = await prismaClient.solicitacao_adocao.create({
        data: {
            usuario: {connect: {id: usuario_id}},
            animal: {connect: {id: animal_id}},
            ong: {connect: {id: ong_id}},
            telefone,
            data_nascimento,
            possui_animais,
            motivo,
            situacao
        },
    });

    return response.json(adocao);
  }
}