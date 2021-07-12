import request from 'supertest'
import { app } from '../app'
import { GitHubPRRequestModel } from '../models/gitHubPRRequest.model';

const axios = require('axios');
jest.mock('axios');

describe("testing github routes", () => {
    it('should return ok', async () => {
        const result = await request(app).get('/').send();
        expect(result.statusCode).toBe(200);
        expect(result.text).toEqual('node app running');
    });

    it('should return 400 with bad request', async () => {
        const result = await request(app).post('/get-open-prs').send({});
        expect(result.statusCode).toBe(400);
        expect(result.text).toEqual('invalid request');
    });

    it('should return 400 with invalid url', async () => {
        const req: GitHubPRRequestModel = {
            gitHubUrl: 'https://someotherurl.com'
        }
        const result = await request(app).post('/get-open-prs').send(req);
        expect(result.statusCode).toBe(400);
        expect(result.text).toEqual('invalid request');
    });

    it('should return 200 with valid url', async () => {
        const resp = {
            title: 'this is a title for open PR'
        };
        const req: GitHubPRRequestModel = {
            gitHubUrl: 'https://github.com/name/reponame'
        };
        axios.get.mockImplementationOnce(() => Promise.resolve({data: resp}));
        const result = await request(app).post('/get-open-prs').send(req);
        expect(result.statusCode).toBe(200);
        expect(result.body).toEqual(resp);
    });

    it('should return 404 for not found', async () => {
        const req: GitHubPRRequestModel = {
            gitHubUrl: 'https://github.com/name/reponame'
        };
        axios.get.mockImplementationOnce(() => Promise.reject({
            response: {
                status: 404
            }
        }));
        const result = await request(app).post('/get-open-prs').send(req);
        expect(result.statusCode).toBe(404);
    });

    it('should return 500 for any other error', async () => {
        const req: GitHubPRRequestModel = {
            gitHubUrl: 'https://github.com/name/reponame'
        };
        axios.get.mockImplementationOnce(() => Promise.reject({
            response: {
                status: 500
            }
        }));
        const result = await request(app).post('/get-open-prs').send(req);
        expect(result.statusCode).toBe(500);
    });
})