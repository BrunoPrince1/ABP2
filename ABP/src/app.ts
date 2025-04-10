import express from 'express';
import dadosRouter from './routes/dados';

const app = express();
const PORT = 3000;

app.use(express.json());

app.use('/dados', dadosRouter);

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
