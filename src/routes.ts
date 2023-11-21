import { Router } from "express";
import multer from "multer";
import uploadConfig from "./config/upload";


const upload = multer(uploadConfig);

//Imports Usuario
import { CreateUsuario } from "./controllers/usuarioController/CreateUsuario";
import { EnviaConviteColaborador } from "./controllers/usuarioController/EnviaConviteColaborador";
import { GetAllUsuario } from "./controllers/usuarioController/GetAllUsuario";
import { GetUsuarioById } from "./controllers/usuarioController/GetUsuarioById";
import { GetUsuarioByEmail } from "./controllers/usuarioController/GetUsuarioByEmail";
import { UpdateUsuario } from "./controllers/usuarioController/UpdateUsuario";
import { DeleteUsuario } from "./controllers/usuarioController/DeleteUsuario";
import { LoginUsuario } from "./controllers/usuarioController/LoginUsuario";
import { ResetPassword } from "./controllers/usuarioController/ResetPassword";


//Imports Ong
import { CreateOng } from "./controllers/ongController/CreateOng";
import { GetOngBySituacao } from "./controllers/ongController/GetOngBySituacao";
import { GetOngsByCity } from "./controllers/ongController/GetOngsByCity";
import { GetAllOng } from "./controllers/ongController/GetAllOng";
import { GetOngById } from "./controllers/ongController/GetOngById";
import { UpdateOng } from "./controllers/ongController/UpdateOng";
import { DeleteOng } from "./controllers/ongController/DeleteOng";

//Import Animais
import { CreateAnimal } from "./controllers/animalController/CreateAnimal";
import { GetAllAnimal } from "./controllers/animalController/GetAllAnimal";
import { GetAnimalById } from "./controllers/animalController/GetAnimalById";
import { GetAnimalByNomeERaca } from "./controllers/animalController/GetAnimalByNomeERaca";
import { UpdateAnimal } from "./controllers/animalController/UpdateAnimal";
import { DeleteAnimal } from "./controllers/animalController/DeleteAnimal";

//Import Colaborador
import { CreateColaborador } from "./controllers/colaboradorController/CreateColaborador";
import { GetAllColaborador } from "./controllers/colaboradorController/GetAllColaborador";
import { GetAllColaboradorByOng } from "./controllers/colaboradorController/GetAllColaboradorByOng";
import { GetAllColaboradorByUsuario } from "./controllers/colaboradorController/GetAllColaboradorByUsuario";
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
import { GetAllResgatePendente } from "./controllers/resgateController/GetAllResgatePendente";
import { GetAllResgateAceitoByOng } from "./controllers/resgateController/GetAllResgateAceitoByOng";
import { GetAllResgateFinalizadoByOng } from "./controllers/resgateController/GetAllResgateFinalizadoByOng";
import { GetResgateById } from "./controllers/resgateController/GetResgateById";
import { UpdateResgate } from "./controllers/resgateController/UpdateResgate";
import { DeleteResgate } from "./controllers/resgateController/DeleteResgate";

//Import Adocao
import { CreateAdocao } from "./controllers/adocaoController/CreateAdocao";
import { GetAllAdocao } from "./controllers/adocaoController/GetAllAdocao";
import { GetAllAdocaoByOng } from "./controllers/adocaoController/GetAllAdocaoByOng";
import { GetAllAdocaoByOngESituacao } from "./controllers/adocaoController/GetAllAdocaoByOngESituacao";
import { GetAdocaoById } from "./controllers/adocaoController/GetAdocaoById";
import { UpdateAdocao } from "./controllers/adocaoController/UpdateAdocao";
import { DeleteAdocao } from "./controllers/adocaoController/DeleteAdocao";

//Import Especie
import { CreateEspecie } from "./controllers/especieController/CreateEspecie";
import { GetAllEspecie } from "./controllers/especieController/GetAllEspecie";
import { GetEspecieById } from "./controllers/especieController/GetEspecieById";
import { GetEspecieByNomeCientifico } from "./controllers/especieController/GetEspecieByNomeCientifico";
import { GetEspecieByNomeComum } from "./controllers/especieController/GetEspecieByNomeComum";
import { GetAllEspecieBySituacao } from "./controllers/especieController/GetAllEspecieBySituacao";
import { UpdateEspecie } from "./controllers/especieController/UpdateEspecie";
import { DeleteEspecie } from "./controllers/especieController/DeleteEspecie";

//Import Raça
import { CreateRaca } from "./controllers/racaController/CreateRaca";
import { GetAllRaca } from "./controllers/racaController/GetAllRaca";
import { GetRacaById } from "./controllers/racaController/GetRacaById";
import { GetRacaByEspecieENome } from "./controllers/racaController/GetRacaByEspecieENome";
import { GetAllRacaByEspecie } from "./controllers/racaController/GetAllRacaByEspecie";
import { GetAllRacaByEspecieESituacao } from "./controllers/racaController/GetAllRacaByEspecieESituacao";
import { GetAllRacaBySituacao } from "./controllers/racaController/GetAllRacaBySituacao";
import { UpdateRaca } from "./controllers/racaController/UpdateRaca";
import { DeleteRaca } from "./controllers/racaController/DeleteRaca";

//Middlewares
import deleteAnimalFoto from "./middlewares/deleteAnimalFoto";
import { authMiddleware } from "./middlewares/authMiddleware";

//Import Estado
import { CreateEstado } from "./controllers/estadoController/CreateEstado";
import { GetAllEstado } from "./controllers/estadoController/GetAllEstado";
import { DeleteEstado } from "./controllers/estadoController/DeleteEstado";

//Import Cidade
import { CreateCidade } from "./controllers/cidadeController/CreateCidade";
import { GetAllCidade } from "./controllers/cidadeController/GetAllCidade";
import { GetAllCidadeByEstado } from "./controllers/cidadeController/GetAllCidadeByEstado";
import { GetCidadeByNome } from "./controllers/cidadeController/GetCidadeByNome";
import { GetCidadeById } from "./controllers/cidadeController/GetCidadeById";
import { DeleteCidade } from "./controllers/cidadeController/DeleteCidade";
import { GetDenunciaByUsuario } from "./controllers/denunciaController/GetDenunciaByUsuario";
import { GetDenunciaByOng } from "./controllers/denunciaController/GetDenunciaByOng";

const routes = Router();

//Rotas Usuário
const createUsuario = new CreateUsuario();
const enviaConviteColaborador = new EnviaConviteColaborador();
const getAllUsuario = new GetAllUsuario();
const getUsuarioById = new GetUsuarioById();
const getUsuarioByEmail = new GetUsuarioByEmail();
const updateUsuario = new UpdateUsuario();
const deleteUsuario = new DeleteUsuario();
const loginUsuario = new LoginUsuario();
const resetPassword = new ResetPassword();

routes.post("/usuario", createUsuario.handle);
routes.post("/enviaConviteColaborador/:email", enviaConviteColaborador.handle);
routes.post("/enviar-email/:email", resetPassword.enviarEmail);
routes.put("/redefinir-senha/:token", resetPassword.redefinirSenha);
routes.put("/ativar/:token", updateUsuario.ativar);
routes.post("/login", loginUsuario.handle);
routes.get("/profile", authMiddleware, loginUsuario.getProfile);
routes.get("/usuarios",getAllUsuario.handle);
routes.get("/usuario/:id",authMiddleware, getUsuarioById.handle);
routes.get("/usuarioEmail/:email",authMiddleware, getUsuarioByEmail.handle);
routes.put("/usuario/:id", updateUsuario.handle);
routes.delete("/usuario/:id", authMiddleware, deleteUsuario.handle);

//Rotas Ong
const createOng = new CreateOng();
const getAllOng = new GetAllOng();
const getOngBySituacao = new GetOngBySituacao();
const getOngsByCity = new GetOngsByCity();
const getOngById = new GetOngById();
const updateOng = new UpdateOng();
const deleteOng = new DeleteOng();

routes.post("/ong", createOng.handle);
routes.get("/ongs", getAllOng.handle);
routes.get("/ongs/:situacao", getOngBySituacao.handle);
routes.get("/ongsByCity/:city", getOngsByCity.handle);
routes.get("/ong/:id", getOngById.handle);
routes.put("/ong/:id", updateOng.handle);
routes.delete("/ong/:id", deleteOng.handle);

//Rotas Animal
const createAnimal = new CreateAnimal();
const getAllAnimal = new GetAllAnimal();
const getAnimalById = new GetAnimalById();
const getAnimalByNomeERaca = new GetAnimalByNomeERaca();
const updateAnimal = new UpdateAnimal();
const deleteAnimal = new DeleteAnimal();

routes.post("/animal", createAnimal.handle);
routes.get("/animais", getAllAnimal.handle);
routes.get("/animaisDisponiveis", getAllAnimal.getDisponiveis);
routes.get("/animal/:id", getAnimalById.handle);
routes.get("/animalNomeRaca/:nome/:raca_id", getAnimalByNomeERaca.handle);
routes.put("/animal/:id", deleteAnimalFoto.middleware, updateAnimal.handle);
routes.delete("/animal/:id", deleteAnimalFoto.middleware, deleteAnimal.handle);

//Rota para adicionar as fotos na pasta uploads
routes.post('/uploads', upload.single('arquivo'), (req, res) => {
    return res.json(req.file);
  });

//Rotas Colaborador
const createColaborador = new CreateColaborador();
const getAllColaborador = new GetAllColaborador();
const getAllColaboradorByOng = new GetAllColaboradorByOng();
const getAllColaboradorByUsuario = new GetAllColaboradorByUsuario();
const getColaboradorById = new GetColaboradorById();
const updateColaborador = new UpdateColaborador();
const deleteColaborador = new DeleteColaborador();

routes.post("/colaborador", createColaborador.handle);
routes.get("/colaboradores", getAllColaborador.handle);
routes.get("/colaboradoresOng/:ong_id", getAllColaboradorByOng.handle);
routes.get("/colaboradoresUsuario/:usuario_id", getAllColaboradorByUsuario.handle);
routes.get("/colaborador/:ong_id/:usuario_id", getColaboradorById.handle);
routes.put("/colaborador/:ong_id/:usuario_id", updateColaborador.handle);
routes.delete("/colaborador/:ong_id/:usuario_id", deleteColaborador.handle);

//Rotas Denuncia
const createDenuncia = new CreateDenuncia();
const getAllDenuncia = new GetAllDenuncia();
const getDenunciaById = new GetDenunciaById();
const getDenunciaByUsuario = new GetDenunciaByUsuario();
const getDenunciaByOng = new GetDenunciaByOng();
const updateDenuncia = new UpdateDenuncia();
const deleteDenuncia = new DeleteDenuncia();

routes.post("/denuncia", createDenuncia.handle);
routes.get("/denuncias", getAllDenuncia.handle);
routes.get("/denuncia/:id", getDenunciaById.handle);
routes.get("/denunciasUsuario/:id", getDenunciaByUsuario.handle);
routes.get("/denunciasOng/:id", getDenunciaByOng.handle);
routes.put("/denuncia/:ong_id/:usuario_id/:id", updateDenuncia.handle);
routes.delete("/denuncia/:ong_id/:usuario_id/:id", deleteDenuncia.handle);

//Rotas Resgate
const createResgate = new CreateResgate();
const getAllResgate = new GetAllResgate();
const getAllResgatePendente = new GetAllResgatePendente();
const getAllResgateAceitoByOng = new GetAllResgateAceitoByOng();
const getAllResgateFinalizadoByOng = new GetAllResgateFinalizadoByOng();
const getResgateById = new GetResgateById();
const updateResgate = new UpdateResgate();
const deleteResgate = new DeleteResgate();

routes.post("/resgate", createResgate.handle);
routes.get("/resgates", getAllResgate.handle);
routes.get("/resgatesPendete", getAllResgatePendente.handle);
routes.get("/resgatesAceitoOng/:ong_id", getAllResgateAceitoByOng.handle);
routes.get("/resgatesFinalizadoOng/:ong_id", getAllResgateFinalizadoByOng.handle);
routes.get("/resgate/:usuario_id/:id", getResgateById.handle);
routes.put("/resgate/:usuario_id/:id", updateResgate.handle);
routes.delete("/resgate/:usuario_id/:id", deleteResgate.handle);

//Rotas Adocao
const createAdocao = new CreateAdocao();
const getAllAdocao = new GetAllAdocao();
const getAllAdocaoByOng = new GetAllAdocaoByOng();
const getAllAdocaoByOngESituacao = new GetAllAdocaoByOngESituacao();
const getAdocaoById = new GetAdocaoById();
const updateAdocao = new UpdateAdocao();
const deleteAdocao = new DeleteAdocao();

routes.post("/adocao", createAdocao.handle);
routes.get("/adocoes", getAllAdocao.handle);
routes.get("/adocoesByOng/:ong_id", getAllAdocaoByOng.handle);
routes.get("/adocoesByOngESituacao/:ong_id/:situacao", getAllAdocaoByOngESituacao.handle);
routes.get("/adocao/:id/:usuario_id/:animal_id/:ong_id", getAdocaoById.handle);
routes.put("/adocao/:id/:usuario_id/:animal_id/:ong_id", updateAdocao.handle);
routes.delete("/adocao/:id/:usuario_id/:animal_id/:ong_id", deleteAdocao.handle);

//Rotas Espécie
const createEspecie = new CreateEspecie();
const getAllEspecie = new GetAllEspecie();
const getEspecieById = new GetEspecieById();
const getEspecieByNomeCientifico = new GetEspecieByNomeCientifico();
const getEspecieByNomeComum = new GetEspecieByNomeComum();
const getAllEspecieBySituacao = new GetAllEspecieBySituacao();
const updateEspecie = new UpdateEspecie();
const deleteEspecie = new DeleteEspecie();

routes.post("/especie", createEspecie.handle);
routes.get("/especies", getAllEspecie.handle);
routes.get("/especie/:id", getEspecieById.handle);
routes.get("/especie/nomeCientifico/:nome_cientifico", getEspecieByNomeCientifico.handle);
routes.get("/especie/nomeComum/:nome_comum", getEspecieByNomeComum.handle);
routes.get("/especie/situacao/:situacao", getAllEspecieBySituacao.handle);
routes.put("/especie/:id", updateEspecie.handle);
routes.delete("/especie/:id", deleteEspecie.handle);

//Rotas Raça
const createRaca = new CreateRaca();
const getAllRaca = new GetAllRaca();
const getRacaById = new GetRacaById();
const getRacaByEspecieENome = new GetRacaByEspecieENome();
const getAllRacaByEspecie = new GetAllRacaByEspecie();
const getAllRacaByEspecieESituacao = new GetAllRacaByEspecieESituacao();
const getAllRacaBySituacao = new GetAllRacaBySituacao();
const updateRaca = new UpdateRaca();
const deleteRaca = new DeleteRaca();

routes.post("/raca", createRaca.handle);
routes.get("/racas", getAllRaca.handle);
routes.get("/raca/:id", getRacaById.handle);
routes.get("/racaEspecieNome/:nome/:especie_id", getRacaByEspecieENome.handle);
routes.get("/racaEspecie/:especie_id", getAllRacaByEspecie.handle);
routes.get("/racaEspecieSituacao/:especie_id/:situacao", getAllRacaByEspecieESituacao.handle);
routes.get("/raca/situacao/:situacao", getAllRacaBySituacao.handle);
routes.put("/raca/:id", updateRaca.handle);
routes.delete("/raca/:id", deleteRaca.handle);

//Rotas Estado
const createEstado = new CreateEstado();
const getAllEstado = new GetAllEstado();
const deleteEstado = new DeleteEstado();

routes.post("/estado", createEstado.handle);
routes.get("/estados", getAllEstado.handle);
routes.delete("/estado/:id", deleteEstado.handle);

//Rotas Cidade
const createCidade = new CreateCidade();
//const GetAllCidade = new GetAllCidade();
const getAllCidadeByEstado = new GetAllCidadeByEstado();
const getCidadeByNome = new GetCidadeByNome();
const getCidadeById = new GetCidadeById();
const deleteCidade = new DeleteCidade();

routes.post("/cidade", createCidade.handle);
//routes.get("/cidades", getAllCidade.handle);
routes.delete("/cidade/:id", deleteCidade.handle);
routes.get("/cidadeEstado/:estado_sigla", getAllCidadeByEstado.handle);
routes.get("/cidade/:id", getCidadeById.handle);
routes.get("/cidadeNome/:estado_sigla/:nome", getCidadeByNome.handle);

export default routes;