import express from 'express';
import { cardsRoute } from './cards';
import { gameRoute } from './game';

export const routes = express.Router();

routes.use('/cards', cardsRoute);
routes.use('/game', gameRoute);
