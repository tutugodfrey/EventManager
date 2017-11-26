import chai from 'chai';
import Functs from './../funcs/funcs';
const funcs = new Functs();
const expect = chai.expect;

describe('Funct class', () => {
	describe('Class', () => {
		it('Should export a function', () => {
			expect(Functs).to.be.a('function');
		});
		it('Should export a function', () => {
			expect(funcs).to.be.a('Object');
		})
		it('funcs should be an instance of Functs', () => {
			expect(funcs).to.be.an.instanceOf(Functs);
		});
  })
})