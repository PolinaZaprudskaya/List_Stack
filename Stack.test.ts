import { Stack } from './Stack';
import { expect } from 'chai';
import 'mocha';

describe('Stack test', () => {
    const stack = new Stack();
    stack.push(9);
    stack.push(9);
    stack.push(4);

    const stack_1 = new Stack();
    stack_1.push(9);
    stack_1.push(9);
    stack_1.push(4);
    stack_1.push(4);
    stack_1.push(7);
    stack_1.push(4);
    stack_1.push(3);
    const stack_3 = new Stack();

    describe("Push", function () {
        stack.push(3);
    });

    describe("Pop", function () {
        it('Should return 3', () => {
            expect(stack_1.pop()).to.equal(3);
        });
        it('Should return 4', () => {
            expect(stack_1.pop()).to.equal(4);
        });
        it('Should return 7', () => {
            expect(stack_1.pop()).to.equal(7);
        });
        it('Should return 4', () => {
            expect(stack_1.pop()).to.equal(4);
        });
        it('Should return null', () => {
            expect(stack_3.pop()).to.equal(null);
        });
    });

    describe("ToString", function () {
        it('Should return 3499', () => {
        expect(stack.toString()).to.equal('3499');
        });
        it('Should return 499', () => {
            expect(stack_1.toString()).to.equal('499');
        });
    });

    describe("Equals", function () {
        it('Should return true', () => {
            expect(stack.equals(stack)).to.equal(true);
        });
        it('Should return false', () => {
            expect(stack.equals(stack_1)).to.equal(false);
        });
    });

    describe("Size", function () {
        it('Should return 4', () => {
            expect(stack.size()).to.equal(4);
        });
        it('Should return 3', () => {
            expect(stack_1.size()).to.equal(3);
        });
        it('Should return 0', () => {
            expect(stack_3.size()).to.equal(0);
        });
    });
    it('Should return null', () => {
        expect(stack_3.get()).to.equal(null);
    });
});