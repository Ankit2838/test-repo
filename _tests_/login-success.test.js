const request = require('supertest');
const app = require('../index');

describe('✅ Valid Login Tests', () => {
  it('should return welcome message for valid username and password', async () => {
    const res = await request(app)
      .post('/login')
      .send('username=ankit&password=secure123');
    expect(res.text).toBe('✅ Welcome, ankit!');
  });

  it('should trim extra spaces from username', async () => {
    const res = await request(app)
      .post('/login')
      .send('username=  ankit  &password=secure123');
    expect(res.text).toContain('✅ Welcome');
  });

  it('should accept special characters in password', async () => {
    const res = await request(app)
      .post('/login')
      .send('username=ankit&password=p@$$w0rd!');
    expect(res.text).toContain('✅ Welcome');
  });

  it('should allow numeric passwords', async () => {
    const res = await request(app)
      .post('/login')
      .send('username=ankit&password=123456');
    expect(res.text).toContain('✅ Welcome');
  });

  it('should return 200 status for valid login', async () => {
    const res = await request(app)
      .post('/login')
      .send('username=ankit&password=anything');
    expect(res.statusCode).toBe(200);
  });
});
