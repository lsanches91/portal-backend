import express from "express";
import cors from 'cors';
import routes from "./routes";
import path from "path";
import axios from 'axios';

const INTERVALO_DE_TEMPO = 10 * 60 * 1000;

function fazerRequisicao() {
      axios.get('https://backend-portal-y4f9.onrender.com/usuarios')
            .then(response => {
                  console.log('Requisição feita com sucesso!', response.data);
            })
            .catch(error => {
                  console.error('Erro na requisição:', error.message);
            });
}

setInterval(fazerRequisicao, INTERVALO_DE_TEMPO);

const PORT = process.env.PORT || 3333;

const app = express();
app.use(cors());
app.use(express.json());

app.use(routes);

app.use("/uploads", express.static(path.join(__dirname, "..", "/uploads")));

app.listen(PORT as number, () =>
      console.log(`Listening on all interfaces:${PORT}`)
);

