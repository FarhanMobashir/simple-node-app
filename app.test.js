const request = require('supertest');
const express = require('express');

const app = require('./index'); // importing the app from

describe('GET /', () => {
    it('should respond with Hello World!', async () => {
        const response = await request(app).get('/');
        expect(response.status).toBe(200);
        expect(response.text).toBe('Hello World From Remote');
    });
});

describe('GET /abc', () => {
    it('should respond with a 404 status for the dummy route', async () => {
        const response = await request(app).get('/404');
        expect(response.status).toBe(404);

    });
});
