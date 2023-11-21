import { urlBase } from './../../../frontend/src/app/services/utilidades.service';
import { animal } from '@prisma/client';

export default {
  render(animal: animal) {
    return {
      id: animal.id,
      nome: animal.nome,
      especie: animal.especie,
      idade: animal.idade,
      porte: animal.porte,
      raca: animal.raca,
      descricao: animal.descricao,
      situacao: animal.situacao,
      foto_path: `${urlBase}/uploads/`+ animal.foto_path,
      ong_id: animal.ong_id
    };
  },
  renderMany(animals: animal[]) {
    return animals.map((animal) => this.render(animal));
  },
};