import { Request, Response } from "express";
import { prismaClient } from "../../database/prismaClient";
import bcrypt from 'bcrypt';
import jwt, { Jwt, JwtPayload } from 'jsonwebtoken';
import { sendEmail } from '../../services/emailService';

export class ResetPassword {
    async enviarEmail(request: Request, response: Response) {
        const emailSearch = request.params.email;

        const usuario = await prismaClient.usuario.findUnique({
            where: {
                email: emailSearch
            }
        })

        if (usuario) {
            const token = jwt.sign({ id: usuario.id }, process.env.JWT_PASS ?? "", { expiresIn: '1h' })
            try {
                sendEmail(usuario.email, "Redefinição de senha PAPA", "<h3>Olá! " + usuario.nome + ", clique no botão para realizar redefinição de sua senha no PAPA</h3><br/><a href='" + process.env.FRONTEND_URL + "/redefinir-senha/" + token + "'><button class='botao' style='border: solid 1px blue; border-radius: 5px; color: white; background-color: blue; padding: 10px;'><b>Redefinir Senha</b></button></a>")
                return response.status(200).json({ msg: "Email de recuperação de senha enviado com sucesso." });
            } catch (err) {
                return response.status(404).json({ error: "Erro ao enviar o e-mail: " + err });
            }
        }
        return response.status(404).json({ error: "Esse endereço de e-mail não está cadastrado no sistema." });
    }

    async redefinirSenha(request: Request, response: Response) {
        console.log("entrou")
        const senha = request.body.senha;
        const novaSenha = request.body.novaSenha
        const tipoRedefinicao = request.body.tipoRedefinicao
        let token: any = {}
        if (tipoRedefinicao == "N") {
            token = request.params.token
        } else if (tipoRedefinicao == "L") {
            const { authorization } = request.headers
            if (!authorization) {
                return response.status(401).json({error: "Erro de autenticação do token!"});
            }

            token = authorization.split(" ")[1];
        }
        console.log(token)

        const hashSenha = await bcrypt.hash(novaSenha, 7);

        try {
            const { id } = jwt.verify(token, process.env.JWT_PASS ?? "") as JwtPayload
            
            let usuario = await prismaClient.usuario.findUnique({
                where: {
                    id: id
                }
            })
            if (!usuario) {
                return response.status(404).json({ error: "Sua conta de usuário não pôde ser encontrada, realize o login novamente." });
            }
            if (tipoRedefinicao == "L") {
                const verificaSenha = await bcrypt.compare(senha, usuario.senha)
                if (verificaSenha) {
                    usuario = await prismaClient.usuario.update({
                        where: {
                            id: id
                        },
                        data: {
                            senha: hashSenha
                        }
                    })
                } else {
                    return response.status(404).json({ error: "A senha informada está incorreta." });
                }
            } else if (tipoRedefinicao == "N") {
                usuario = await prismaClient.usuario.update({
                    where: {
                        id: id
                    },
                    data: {
                        senha: hashSenha
                    }
                })
            }
            return response.json(usuario);
        } catch (erro) {
            return response.status(500).json({ error: "Seu token de acesso expirou, realize o login novamente." });
        }
    }

}