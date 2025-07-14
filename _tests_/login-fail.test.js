const request = require('supertest');
const app = require('../index');

describe('❌ Invalid Login Tests', () => {
  it('should show error if both fields are empty', async () => {
    const res = await request(app)
      .post('/login')
      .send('username=&password=');
    expect(res.text).toBe('❌ Username and password are required.');
  });

  it('should show error if username is missing', async () => {
    const res = await request(app)
      .post('/login')
      .send('username=&password=test');
    expect(res.text).toBe('❌ Username and password are required.');
  });

  it('should show error if password is missing', async () => {
    const res = await request(app)
      .post('/login')
      .send('username=ankit&password=');
    expect(res.text).toBe('❌ Username and password are required.');
  });

  it('should return 200 even when login fails', async () => {
    const res = await request(app)
      .post('/login')
      .send('username=&password=');
    expect(res.statusCode).toBe(200);
  });

  it('should return plain text response', async () => {
    const res = await request(app)
      .post('/login')
      .send('username=ankit&password=secure');
    expect(res.headers['content-type']).toMatch(/text\/html/);
  });
});
