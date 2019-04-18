import * as express from 'express';
import { Request, Response } from 'express';

// eslint-disable-next-line
export const routes = express.Router();

routes.get('/', (_: Request, res: Response): Response => res.send({ hello: 'world' }));
routes.get('/users', (_: Request, res: Response): Response => res.send([]));
routes.post('/users', (req: Request, res: Response): Response => res.send({ body: req.body }));