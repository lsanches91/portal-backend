import express from "express";
import cors from 'cors';
import routes from "./routes";
import path from "path";

const PORT = process.env.PORT || 3333;

const app = express();
app.use(cors());
app.use(express.json());

app.use(routes);

app.use("/uploads", express.static(path.join(__dirname, "..", "/uploads")));

app.listen(PORT as number, () =>
      console.log(`Listening on all interfaces:${PORT}`)
);

