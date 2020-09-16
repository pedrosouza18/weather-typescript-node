import supertest from 'supertest';

describe('Beach forecast functional tests', () => {

  it('it should return a forecast with just a few times', async () => {
    const { body, status } = await supertest(app).get('/forecast');
    expect(status).toBe(200);
    expect(body).toMatchInlineSnapshot();
  });
});