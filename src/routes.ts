import { Router } from "express";
//Imports Usuario
import { CreateUsuario } from "./controllers/usuarioController/CreateUsuario";
import { GetAllUsuario } from "./controllers/usuarioController/GetAllUsuario";
import { GetUsuarioById } from "./controllers/usuarioController/GetUsuarioById";
import { UpdateUsuario } from "./controllers/usuarioController/UpdateUsuario";
import { DeleteUsuario } from "./controllers/usuarioController/DeleteUsuario";
import { LoginUsuario } from "./controllers/usuarioController/LoginUsuario";

//Imports Ong
import { CreateOng } from "./controllers/ongController/CreateOng";
import { GetAllOng } from "./controllers/ongController/GetAllOng";
import { GetOngById } from "./controllers/ongController/GetOngById";
import { UpdateOng } from "./controllers/ongController/UpdateOng";
import { DeleteOng } from "./controllers/ongController/DeleteOng";

//Import Animais
import { CreateAnimal } from "./controllers/animalController/CreateAnimal";
import { GetAllAnimal } from "./controllers/animalController/GetAllAnimal";
import { GetAnimalById } from "./controllers/animalController/GetAnimalById";
import { UpdateAnimal } from "./controllers/animalController/UpdateAnimal";
import { DeleteAnimal } from "./controllers/animalController/DeleteAnimal";

//Import Colaborador
import { CreateColaborador } from "./controllers/colaboradorController/CreateColaborador";
import { GetAllColaborador } from "./controllers/colaboradorController/GetAllColaborador";
import { GetColaboradorById } from "./controllers/colaboradorController/GetColaboradorById";
import { UpdateColaborador } from "./controllers/colaboradorController/UpdateColaborador";
import { DeleteColaborador } from "./controllers/colaboradorController/DeleteColaborador";

//Import Denuncia
import { CreateDenuncia } from "./controllers/denunciaController/CreateDenuncia";
import { GetAllDenuncia } from "./controllers/denunciaController/GetAllDenuncia";
import { GetDenunciaById } from "./controllers/denunciaController/GetDenunciaById";
import { UpdateDenuncia } from "./controllers/denunciaController/UpdateDenuncia";
import { DeleteDenuncia } from "./controllers/denunciaController/DeleteDenuncia";

//Import Resgate
import { CreateResgate } from "./controllers/resgateController/CreateResgate";
import { GetAllResgate } from "./controllers/resgateController/GetAllResgate";
import { GetResgateById } from "./controllers/resgateController/GetResgateById";
import { UpdateResgate } from "./controllers/resgateController/UpdateResgate";
import { DeleteResgate } from "./controllers/resgateController/DeleteResgate";

//Import Adocao
import { CreateAdocao } from "./controllers/adocaoController/CreateAdocao";
import { GetAllAdocao } from "./controllers/adocaoController/GetAllAdocao";
import { GetAdocaoById } from "./controllers/adocaoController/GetAdocaoById";
import { UpdateAdocao } from "./controllers/adocaoController/UpdateAdocao";
import { DeleteAdocao } from "./controllers/adocaoController/DeleteAdocao";
import { authMiddleware } from "./middlewares/authMiddleware";

const routes = Router();

//Rotas Usuário
const createUsuario = new CreateUsuario();
const getAllUsuario = new GetAllUsuario();
const getUsuarioById = new GetUsuarioById();
const updateUsuario = new UpdateUsuario();
const deleteUsuario = new DeleteUsuario();
const loginUsuario = new LoginUsuario();

routes.post("/usuario", createUsuario.handle);
routes.post("/login", loginUsuario.handle);
routes.get("/profile", authMiddleware, loginUsuario.getProfile);
routes.get("/usuarios", authMiddleware,getAllUsuario.handle);
routes.get("/usuario/:id", authMiddleware, getUsuarioById.handle);
routes.put("/usuario/:id", authMiddleware, updateUsuario.handle);
routes.delete("/usuario/:id", authMiddleware, deleteUsuario.handle);

//Rotas Ong
const createOng = new CreateOng();
const getAllOng = new GetAllOng();
const getOngById = new GetOngById();
const updateOng = new UpdateOng();
const deleteOng = new DeleteOng();

routes.post("/ong", createOng.handle);
routes.get("/ongs", getAllOng.handle);
routes.get("/ong/:id", getOngById.handle);
routes.put("/ong/:id", updateOng.handle);
routes.delete("/ong/:id", deleteOng.handle);

//Rotas Animal
const createAnimal = new CreateAnimal();
const getAllAnimal = new GetAllAnimal();
const getAnimalById = new GetAnimalById();
const updateAnimal = new UpdateAnimal();
const deleteAnimal = new DeleteAnimal();

routes.post("/animal", createAnimal.handle);
routes.get("/animais", getAllAnimal.handle);
routes.get("/animal/:id", getAnimalById.handle);
routes.put("/animal/:id", updateAnimal.handle);
routes.delete("/animal/:id", deleteAnimal.handle);

//Rotas Colaborador
const createColaborador = new CreateColaborador();
const getAllColaborador = new GetAllColaborador();
const getColaboradorById = new GetColaboradorById();
const updateColaborador = new UpdateColaborador();
const deleteColaborador = new DeleteColaborador();

routes.post("/colaborador", createColaborador.handle);
routes.get("/colaboradores", getAllColaborador.handle);
routes.get("/colaborador/:ong_id/:usuario_id", getColaboradorById.handle);
routes.put("/colaborador/:ong_id/:usuario_id", updateColaborador.handle);
routes.delete("/colaborador/:ong_id/:usuario_id", deleteColaborador.handle);

//Rotas Denuncia
const createDenuncia = new CreateDenuncia();
const getAllDenuncia = new GetAllDenuncia();
const getDenunciaById = new GetDenunciaById();
const updateDenuncia = new UpdateDenuncia();
const deleteDenuncia = new DeleteDenuncia();

routes.post("/denuncia", createDenuncia.handle);
routes.get("/denuncias", getAllDenuncia.handle);
routes.get("/denuncia/:ong_id/:usuario_id/:id", getDenunciaById.handle);
routes.put("/denuncia/:ong_id/:usuario_id/:id", updateDenuncia.handle);
routes.delete("/denuncia/:ong_id/:usuario_id/:id", deleteDenuncia.handle);

//Rotas Resgate
const createResgate = new CreateResgate();
const getAllResgate = new GetAllResgate();
const getResgateById = new GetResgateById();
const updateResgate = new UpdateResgate();
const deleteResgate = new DeleteResgate();

routes.post("/resgate", createResgate.handle);
routes.get("/resgates", getAllResgate.handle);
routes.get("/resgate/:usuario_id/:id", getResgateById.handle);
routes.put("/resgate/:usuario_id/:id", updateResgate.handle);
routes.delete("/resgate/:usuario_id/:id", deleteResgate.handle);

//Rotas Adocao
const createAdocao = new CreateAdocao();
const getAllAdocao = new GetAllAdocao();
const getAdocaoById = new GetAdocaoById();
const updateAdocao = new UpdateAdocao();
const deleteAdocao = new DeleteAdocao();

routes.post("/adocao", createAdocao.handle);
routes.get("/adocoes", getAllAdocao.handle);
routes.get("/adocao/:ong_id/:animal_id/:usuario_id", getAdocaoById.handle);
routes.put("/adocao/:ong_id/:animal_id/:usuario_id", updateAdocao.handle);
routes.delete("/adocao/:ong_id/:animal_id/:usuario_id", deleteAdocao.handle);

export default routes;