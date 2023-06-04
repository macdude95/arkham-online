import { Router } from 'express';

export const gameRoute = Router();

gameRoute.get('/create', (req, res) => {
  res.send({ message: 'Hello API cards' }); // TODO: Allow game creation specifying things like investigators/dekcs who are playing and the scenario being played and difficulty
});
