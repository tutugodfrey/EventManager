// process.env.NODE_ENV = "test";
import chai from 'chai';
import chaiHttp from 'chai-http';
import Server from './../app';
const assert = chai.assert;
const server = new Server();
const expect = chai.expect;
const app = server.expressServer();
chai.use(chaiHttp);

describe('Server', () => {
  describe('unit test', () => { 
    it('should export a function', () => {
      expect(Server).to.be.a('function');
    });
    it('should to be an object', () => {
      expect(server).to.be.a('Object');
    });

    it('server should be an instanceOf Server', () => {
      expect(server).to.be.an.instanceOf(Server);
    });
  });
})
