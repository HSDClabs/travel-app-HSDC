const mongoose = require("mongoose");
const request = require("supertest");
const server = require('../server/server');

require("dotenv").config();

//connect to mongoDB to access user information
beforeEach(async () => {
    await mongoose.connect(process.env.MONGODB_URI);
  });

  //disconnect after each test
  afterEach(async () => {
    await mongoose.connection.close();
  });

  //test login post request
describe("POST /api/user/login", () => {
    it("should return the user object with hashed password", async () => {
        const res = await request(server).post("/api/user/login").send({
            username: 'garyb',
            password: 'firechicken'
        })
        // expect('Content-Type',/json/);
        expect(res.status).toBe(200);
        expect(res.body.username).toBe('garyb');
        expect(res.body.password).not.toBe('firechicken');
        expect(res.body.password).toBe('$2b$10$NadHOpQBA6TNqEEIFyRFKuRWwAb4EM94jyn9Q6zbtxVcKY/xC7Kym');
    });
    it("should return false for unknown user", async () => {
        const res = await request(server).post("/api/user/login").send({
            username: 'root',
            password: 'obaga'
        })
        expect(res.status).toBe(200);
        expect(res.body).toBe(false);
    });
    it("should return error for improper login", async () => {
        const res = await request(server).post("/api/user/login").send({
            chicken:'butt'
        })
        expect(res.status).toBe(500);
    })
});
//Sign up post request
describe("POST /api/user/signup", () => {
    it("should return user object with hashed password", async () => {
        const res = await request(server).post("/api/user/signup").send({
            username:'pollyj',
            password:'hi'
        });
        // expect('Content-Type',/json/);
        expect(res.status).toBe(200);
        expect(res.body.username).toBe('pollyj');
        expect(res.body.password).not.toBe('hi');
    });
    it("should return false if user exists", async () => {
        const res = await request(server).post("/api/user/signup").send({
            username: 'garyb',
            password:'123'
        });
        expect(res.status).toBe(200);
        expect(res.body.username).toBe(undefined);
        expect(res.body).toBe(false);
    });
});
