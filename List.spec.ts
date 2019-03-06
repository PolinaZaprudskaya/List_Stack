import { LinkedList } from './List';
import { expect } from 'chai';
import 'mocha';

describe('List test', () => {

    const list = new LinkedList();
    list.add_index("Sasha", 0);
    list.add_index("Polina", 10);
    list.add_index("Masha", 1);
    list.add_index("Dasha", 3);

    const list_2 = new LinkedList();
    list_2.add_index("Sasha", 0);
    list_2.add_index("Polina", 10);

    const list_4 = new LinkedList();
    list_4.add_index("Sasha", 0);
    list_4.add_index("Polina", 10);
    list_4.add_index("Masha", 2);

    const list_3 = new LinkedList();
    list_3.add_index("Sasha", 0);
    list_3.add_index("Polina", 10);
    list_3.add_index("Masha", 2);
    list_3.add_index("Dasha", 3);

    describe("Add", function () {
        list_2.add_index("Masha", 2);
    });

    describe("Remove", function () {
        list_3.remove(3);
    });

    describe("ToString", function () {
        it('Should return SashaMashanullDashanullnullnullnullnullnullPolina', () => {
            expect(list.ToString()).to.equal('SashaMashanullDashanullnullnullnullnullnullPolina');
        });
        it('Should return SashanullMashanullnullnullnullnullnullPolina', () => {
            expect(list_3.ToString()).to.equal('SashanullMashanullnullnullnullnullnullPolina');
        });

    });

    describe("Equals", function () {
        it('Should return false', () => {
            expect(list.equals(list_2)).to.equal(false);
        });
        it('Should return false (2)', () => {
            expect(list.equals(list_3)).to.equal(false);
        });
        it('Should return true', () => {
            expect(list_2.equals(list_4)).to.equal(true);
        });

    });

    describe("Hashcode", function () {
        it('Should return 1068813220', () => {
            expect(list.hashcode()).to.equal(1068813220);
        });
    });

    describe("Get", function () {
        it('Should return Anya', () => {
            expect(list.get(2)).to.equal(null);
        });
        it('Should return Masha', () => {
            expect(list.get(1)).to.equal("Masha");
        });
        it('Should return null', () => {
            expect(list.get(13)).to.equal(null);
        });

    });

    describe("Size", function () {
        it('Should return 11', () => {
            expect(list.Size()).to.equal(11);
        });
        it('Should return 10', () => {
            expect(list_3.Size()).to.equal(10);
        });
    });
})



