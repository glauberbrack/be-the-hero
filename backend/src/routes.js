import { Router } from 'express';

import OngController from './controllers/OngController';
import OngProfileController from './controllers/OngProfileController';
import IncidentController from './controllers/IncidentController';
import SessionController from './controllers/SessionController';

const routes = new Router();

routes.post('/sessions', SessionController.create);

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

routes.get('/profile', OngProfileController.index);

routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);

export default routes;
