import { Request, Response } from "express";
import { prismaClient } from "../../database/prismaClient";

export class UpdateResgate {
  async handle(request: Request, response: Response) {
    const id_usuario = parseInt(request.params.usuario_id);
    const id = parseInt(request.params.id);
    
    const {
        descricao,
        especie,
        logradouro_aproximado,
        numero_aproximado,
        bairro,
        cidade,
        cep,
        uf,
        ponto_referencia,
        situacao,
        usuario_id,
        ong_id
    } = request.body;
    
    const resgate = await prismaClient.solicitacao_resgate.update({
        where: {
            id_usuario_id: {usuario_id, id},
        },
        data: {
            descricao,
            especie,
            logradouro_aproximado,
            numero_aproximado,
            bairro,
            cidade,
            cep,
            uf,
            ponto_referencia,
            situacao,
            usuario_id,
            ong_id
        }
    })

    return response.json(resgate);
  }
}