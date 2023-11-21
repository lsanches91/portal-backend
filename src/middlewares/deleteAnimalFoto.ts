import { NextFunction, Request, Response } from "express";
import fs from 'fs';
import path from 'path';
import { prismaClient } from "../database/prismaClient";


export default {
  async middleware(_req: Request, res: Response, next: NextFunction) {
    const animalId = parseInt(_req.params.id);
    let fotoPathAtual = _req.body.foto_path;
    
    try {
      // Obtenha o registro do banco de dados
      const animal = await prismaClient.animal.findUnique({
        where: {
          id: animalId
        }
      })
        
      if (!animal) {
        return res.status(404).json({ message: 'Animal não encontrado' });      
      }else{
        if (animal.foto_path != '' && animal.foto_path != fotoPathAtual && animal.foto_path != null) {
          const filePath = path.join('./uploads/', animal.foto_path);
          fs.unlinkSync(filePath);
        }
        // Continue para a próxima função de middleware
        next();
      } 
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Erro ao excluir o arquivo' });
    }
  }
};
