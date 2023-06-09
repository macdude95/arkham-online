import express from 'express';
import { routes } from './routes';

const app = express();

app.get('/', (req, res) => {
  res.send({ message: 'Hello API' });
});

app.use(routes);

const port = process.env.PORT || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
