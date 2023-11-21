import { Request, Response } from "express";
import { prismaClient } from "../../database/prismaClient";

export class GetUsuarioByEmail {
    async handle(request: Request, response: Response) {
        try {
            const email = request.params.email;

            const usuario = await prismaClient.usuario.findFirst({
                where: {
                    email: email
                },
                include: {
                  cidade: {
                    include:{
                        estado:true
                    }
                  }
                }
            })

            return response.json(usuario);

        } catch (erro) {
            console.log(erro);
            response.status(500).json({ error: "Erro ao buscar Usuário pelo E-mail." });
        }

    }
}