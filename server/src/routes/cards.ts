import { Router } from 'express';
import { CardService } from '../services/CardService';

export const cardsRoute = Router();
const cardService = new CardService();

cardsRoute.get('/all', (req, res) => {
  res.send(cardService.getAllCards()); // TODO: Set up an API request that can get all cards into one massive json blob (might be too big, but it's the simples so we should at least try it)
});
