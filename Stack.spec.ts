import { Stack } from './Stack';
import { expect } from 'chai';
import 'mocha';

describe('Stack test', () => {
    const stack = new Stack<number>();
    stack.push(1);
    stack.push(2);
    stack.push(3);
    stack.push(4);
    stack.push(4);


    it('Should return 1800617104', () => {
        expect(stack.hashcode()).to.equal(1800617104);
    });
    it('Should return hello 12344', () => {
        expect(stack.ToString()).to.equal('12344');
    });
    it('Should return 5', () => {
        expect(stack.size()).to.equal(5);
    });
    it('Should return 4', () => {
        expect(stack.pop()).to.equal(4);
        expect(stack.pop()).to.equal(4);
        expect(stack.pop()).to.equal(3);
    });
    const stack_1 = new Stack<number>();
    stack_1.push(1);
    const stack_2 = new Stack<number>();
    stack_2.push(1);
    it('Should return true', () => {
        expect(stack_1.equals(stack_2)).to.equal(true);
    });
    const stack_3 = new Stack<number>();
    stack_3.push(1);
    it('Should return 1', () => {
        expect(stack_3.pop()).to.equal(1);
    });



});