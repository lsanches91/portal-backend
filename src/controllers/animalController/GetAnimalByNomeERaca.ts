import { Request, Response } from "express";
import { prismaClient } from "../../database/prismaClient";

export class GetAnimalByNomeERaca {
    async handle(request: Request, response: Response) {
        try {
            const nome = request.params.nome;
            const raca_id = parseInt(request.params.raca_id);

            const animal = await prismaClient.animal.findFirst({
                where: {
                    nome: nome,
                    raca_id: raca_id
                },
                include: {
                    ong: {
                        include: {
                            cidade: {
                                include: {
                                    estado: true
                                }
                            }
                        }
                    },
                    raca: {
                        include: {
                            especie: true
                        }
                    }
                }
            })

            return response.json(animal);

        } catch (erro) {
            console.log(erro);
            response.status(500).json({ error: "Erro ao buscar Animal pelo Nome e Raça." });
        }
    }
}