import express from 'express'
import request from 'request'
import { GitHubPRRequestModel } from '../models/gitHubPRRequest.model';

export class GitHubRoute {
    private app: express.Application;
    private regex = new RegExp('https:\/\/github.com\/([^\/]+)\/([^\/]+)');

    constructor(app: express.Application) {
        this.app = app;
        this.configureRoutes();
    }

    private configureRoutes(): void {
        this.app.post('/get-open-prs', (req: express.Request, res: express.Response) => {
            const gitHubUrl = (req.body as GitHubPRRequestModel)?.gitHubUrl;
            if (!gitHubUrl) {
                res.status(400).send('invalid request');
            }
            else {
                const matchArray = gitHubUrl.match(this.regex);
                if (matchArray) {
                    request.get(
                        `https://api.github.com/repos/${matchArray[1]}/${matchArray[2]}/pulls`,
                        {headers: {'user-agent': 'node.js'}},
                        function(error, response, body) {
                            res.status(200).json(body);
                        }
                    );
                }
                else {
                    res.status(400).send('invalid request');
                }
            }
        });
    }
}