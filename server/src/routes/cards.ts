import { Router } from 'express';

export const cardsRoute = Router();

cardsRoute.get('/all', (req, res) => {
  res.send({ message: 'Hello API cards' }); // TODO: Set up an API request that can get all cards into one massive json blob (might be too big, but it's the simples so we should at least try it)
});
