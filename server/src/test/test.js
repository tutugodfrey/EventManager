
import chai from 'chai';
import Server from './../app';

const assert = chai.assert;
const app = new Server();
const expect = chai.expect;
describe('Server', () => {
  describe('Valid Server', () => {
    it('should export a function', () => {
      expect(Server).to.be.a('function');
    });
    it('should to be an object', () => {
      expect(app).to.be.a('Object');
    });
    it('app should be an instanceOf Server', () => {
      expect(app).to.be.an.instanceOf(Server);
    });
  });
});
