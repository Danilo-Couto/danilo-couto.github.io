const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../api/app');

chai.should();
chai.use(chaiHttp);


const loginBody = {
  email: "zebirita@email.com",
  password: "$#zebirita#$",
}

const loginIncorretBody = {
  email: "zebirita@email.com",
  password: "$zebirita$",
}

describe("Test endpoint POST /login", () => {

  it('Success case', (done) => {
    chai.request(app).post("/login").send(loginBody).end((_err, res) => {
      res.should.have.status(200);
      res.body.should.be.a("object")
      res.body.userFound.should.have.property("id");
      res.body.userFound.should.have.property("name");
      res.body.userFound.should.have.property("email");
      res.body.userFound.should.have.property("role");
      res.body.userFound.should.have.property("token");
      done();
    });
  })

  it('Fail case', (done) => {
    chai.request(app).post("/login").send(loginIncorretBody).end((_err, res) => {
      res.should.have.status(401);
      res.body.should.have.deep.equal({message: "Incorrect username or password"})
      done();
    });
  })
})
