const request = require('supertest');
const express = require('express');

const app = require('./index'); // Assuming your app is in app.js

describe('GET /', () => {
    it('should respond with Hello World!', async () => {
        const response = await request(app).get('/');
        expect(response.status).toBe(200);
        expect(response.text).toBe('Hello World!');
    });
});

describe('GET /abc', () => {
    it('should respond with a 404 status for the dummy route', async () => {
        const response = await request(app).get('/abc');
        expect(response.status).toBe(404);
    });
});
