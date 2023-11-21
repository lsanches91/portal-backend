import { Request, Response } from "express";
import { prismaClient } from "../../database/prismaClient";
import { sendEmail } from '../../services/emailService';

export class EnviaConviteColaborador {
  async handle(request: Request, response: Response) {
    //const usuario_id = parseInt(request.params.usuario_id);
    const email = request.params.email;
    try {
      const usuario = await prismaClient.usuario.findFirst({
        where:{
            email:email
        }
      })

      if(usuario){
        sendEmail(usuario.email, "Colaborador PAPA", "<h3>Olá! "+usuario.nome+", você se tornou colaborador, acesse a Área do Colaborador para acessar a ONG.")

      }

      return response.json(usuario);

    } catch (erro) {
      console.log(erro);
      response.status(500).json({ error: "Erro ao buscar todos os Colaboradores." });
    }
  }
}