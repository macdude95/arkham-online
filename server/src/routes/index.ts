import express from 'express';
import { cardsRoute } from './cards';

export const routes = express.Router();

routes.use(cardsRoute);
