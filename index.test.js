const request = require('supertest');
const express = require('express');
const app = require('./index'); // Assuming app is exported from index.js

describe('POST /login', () => {
  it('should return error if username or password is missing', async () => {
    const res = await request(app)
      .post('/login')
      .send('username=&password=');
    expect(res.text).toBe('❌ Username and password are required.');
  });

  it('should return welcome message if both fields are provided', async () => {
    const res = await request(app)
      .post('/login')
      .send('username=Ankit&password=1234');
    expect(res.text).toBe('✅ Welcome, Ankit!');
  });
});