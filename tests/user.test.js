const mongoose = require("mongoose");
const request = require("supertest");
const server = require('../server/server');
const bcrypt = require('bcrypt');
const saltRounds = 10;

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
xdescribe("POST /api/user/login", () => {
    it("should return the user object with hashed password", async () => {
        const res = await request(server).post("/api/user/login").send({
            username: 'garyb',
            password: 'firechicken'
        })
        //console.log(res);
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

xdescribe("POST /api/user/signup", () => {
    it("should return user object with hashed password", async () => {
        const res = await request(server).post("/api/user/signup").send({
            username:'joh',
            password:'hi'
        });
        expect(res.status).toBe(200);
        expect(res.body.username).toBe('joh');
        expect(res.body.password).not.toBe('hi');

    });
});