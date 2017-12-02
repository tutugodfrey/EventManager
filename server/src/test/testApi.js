import chai from 'chai';
import chaiHttp from 'chai-http';
import Server from './../app';;
const assert = chai.assert;
const server = new Server();
const expect = chai.expect;
const app = server.expressServer();
chai.use(chaiHttp);

describe('API routes', () => {
  // test users
  describe('Users', () => {
    it('should return welcome message', () => {
      return chai.request(app)
      .get('/')
      .then((res) => {
        expect(res.body).to.be.an('Object')
      });
    })
  })
})