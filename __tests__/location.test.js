const request = require("supertest");
const server = require('../server/server');


describe('POST api/location', () => {
    it('POST /api/users should return 200, with city info after city input', async () => {
        const res = await request(server).post("/api/location/tokyo").send({
            "location":"tokyo"
        })
        expect(res.status).toBe(200);
        expect(res.body.activityInfo).not.toBe(undefined);
        expect(res.body.coffeeInfo).not.toBe(undefined);
        expect(res.body.parkInfo).not.toBe(undefined);
        expect(res.body.restaurantInfo).not.toBe(undefined);
        expect(res.body.barInfo).not.toBe(undefined);
        expect(res.body.comedyInfo).not.toBe(undefined);
    });

});