const express = require('express');

const IncidentController = require('./controllers/IncidentController');
const OngController = require('./controllers/OngController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

routes.get('/profile', ProfileController.index);

routes.post('/sessions', SessionController.create);

module.exports = routes;

/*
 * Rota / Recurso
 */
/*
 * Tipos de Recursos / Métodos HTTP 
 * 
 * GET: Buscar/listar uma informação no back-end
 * POST: Criar uma informação no back-end
 * PUT: Alterar uma informação no back-end
 * DELETE: Apagar uma informação no back-end
 */
/*
 * Tipos de Parâmetros
 *
 * Query Params(request.query): Parâmetros nomeados enviados na rota após "?" (Filtros, paginação)
 * Route Params(request.params): Parâmetros para identificar recursos
 * Request Body(request.body): Corpo da requisição. Utilizado para criar ou alterar recursos
 */