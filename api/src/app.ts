import express from 'express';
import cors from 'cors';
import { GitHubRoute } from './routes/gitHub.route';

export const app: express.Application = express();
let gitHubRoute: GitHubRoute;

app.use(express.json());
app.use(cors());

gitHubRoute = new GitHubRoute(app);

app.get('/', (req: express.Request, res: express.Response) => {
    res.status(200).send('node app running');
});