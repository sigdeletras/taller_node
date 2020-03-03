// Import the dependencies for testing

// "test": "mocha --require babel-register tests/*.js --exit",

// import chai from 'chai';
// import chaiHttp from 'chai-http';
let app = require('../server')

let chai = require('chai');
let chaiHttp = require('chai-http');

const expect = require('chai').expect;
const assert = require('chai').assert;
const should = require('chai').should();

chai.use(chaiHttp);

// const url = 'http://localhost:3000';

// Configure chai
chai.use(chaiHttp);
chai.should();

describe("Servidor", () => {
    it("Bienvenida de la API", done => {
        chai
            .request(app)
            .get("/")
            .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res.body.status).to.equals("success");
                expect(res.body.message).to.equals("Hola Trassierra");
                done();
            });
    });
})

describe('Usuarios: ', () => {

    // it('Debe devolver un objeto con datos de un usuario', (done) => {
    //     chai.request(app)
    //         .get('/user')
    //         .end(function(err, res) {
    //             expect(res).to.have.status(200);
    //             expect(res.body).should.be.a('object');
    //             done();
    //         });
    // });
    it('Debe devolver array de objetos de usuarios', (done) => {
        chai
            .request(app)
            .get('/api')
            .end(function(err, res) {
                expect(res).to.have.status(200);
                expect(res.body).should.be.a('object');
                done();
            });
    });

    it("Debe añadir usuario", done => {
        chai
            .request(app)
            .post("/api")
            .send({ nombre: 'Pepe', edad: 35 })
            .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res.body.state).to.equals(1);
                expect(res.body.data).should.be.a('object');
                done();
            });
    });
    it("Debe dar error por faltar parámetros", done => {
        chai
            .request(app)
            .post("/api")
            //.send({ nombre: 'Pepe', edad: 35 })
            .end((err, res) => {
                expect(res).to.have.status(400);
                expect(res.body.state).to.equals(0);
                // console.log(res.body.message);
                done();
            });
    });


});