import { Request, Response, json } from "express";
import { prismaClient } from "../../database/prismaClient";
import bcrypt from 'bcrypt';
import jwt, { Jwt } from 'jsonwebtoken'

type JwtPayload = {
    id: number
}

export class LoginUsuario {
    
    async handle(req: Request, res: Response){
        const { email, senha } = req.body
        const usuario = await prismaClient.usuario.findUnique({
            where: {
              email: email
            },
            include: {
              cidade: true
            }
        })

        if(!usuario){
            return res.status(404).json({error:"E-mail desconhecido ou senha inválida."});
        }

        const verificaSenha = await bcrypt.compare(senha, usuario.senha)   
        if(!verificaSenha){
            return res.status(404).json({error:"E-mail desconhecido ou senha inválida."});
        }

        if(usuario.situacao=="P"){
            return res.status(404).json({error:"Ative sua conta através do e-mail para acessar o sistema."});
        }
        const token = jwt.sign({ id: usuario.id}, process.env.JWT_PASS ?? "", {expiresIn: '8h'})
        console.log(token);

        const {senha:_, ...user} = usuario;
        return res.json({user: user, token: token});
    }

    async getProfile(req: Request, res: Response){
        const {authorization} = req.headers
        if(!authorization){
            return res.status(401);
        }

        const token = authorization.split(" ")[1];
        const { id } = jwt.verify(token, process.env.JWT_PASS ?? "") as JwtPayload

        const usuario = await prismaClient.usuario.findUnique({
            where:{
                id:id
            },
            include: {
              cidade: {
                include:{
                    estado:true
                }
              }
            }
        })

        if(!usuario){
            return res.status(401);
        }

        const {senha:_, ...usuarioLogado} = usuario;
        return res.json(usuarioLogado); 
    }
}