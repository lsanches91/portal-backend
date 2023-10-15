import express from "express";
import cors from 'cors';
import routes from "./routes";

const PORT = process.env.PORT || 3333;

const app = express();
app.use(cors());
app.use(express.json());

app.use(routes);

app.listen(PORT as number, () =>
      console.log(`Listening on all interfaces:${PORT}`)
);

