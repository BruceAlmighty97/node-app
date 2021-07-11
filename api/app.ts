import express from 'express';
import cors from 'cors';

export const app: express.Application = express();
const runningMessage = "Node application is running";

app.use(express.json());
app.use(cors());

app.get('/', (req: express.Request, res: express.Response) => {
    res.status(200).send(runningMessage);
});