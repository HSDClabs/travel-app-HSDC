const request = require("supertest");
const server = require('../server/server');

xdescribe('POST api/location', () => {
    let authToken = 'Bearer OmgJFQk8VBZfv0zC6St4qG5X1zfA694YbdWZlvFmF09GAU9vSgR56VG0g7FpjJf2XHGqO6kfeypyDcrKMkLMo_CzP4ED7v9XXodQazsa_YYnXIpy-kRkjs9z-DE0ZHYx'
    it('POST /api/users should return 200 with authentication', async () => {
        const res = await request(server).post("/api/location/tokyo").send({
            "location":"tokyo"
        }).
        expect(res.status).toBe(200);
        expect(res.body).toBeInstanceOf(Object)
    });
});

