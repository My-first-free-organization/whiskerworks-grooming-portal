import express from 'express';
import { router } from './grooming.routes';

const app = express();
app.use(express.json());
app.use('/grooming', router);
app.get('/health', (_, res) => res.json({ ok: true }));
app.listen(Number(process.env.PORT ?? 3000));
