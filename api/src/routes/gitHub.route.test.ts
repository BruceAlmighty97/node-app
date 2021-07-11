import request from 'supertest'
import { app } from '../app'

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
})