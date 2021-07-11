import request from 'supertest'
import { app } from '../app'

describe("testing github routes", () => {
    it('should true', () => {
        expect(true).toBe(true);
    });

    it('should return ok', async () => {
        const result = await request(app).get('/').send();
        expect(result.statusCode).toBe(200);
        expect(result.text).toEqual('node app running');
    });
})