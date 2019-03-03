import { LinkedList } from './List';
import { expect } from 'chai';
import 'mocha';

describe('List test', () => {
    const list = new LinkedList<string>();
    list.add("Sasha"); //0
    list.add("Dasha"); //1
    list.add("Anya"); //2
    list.add("Katya"); //3

    it('Should return 47162577', () => {
        expect(list.hashcode()).to.equal(47162577);
    });

    it('Should return SashaDashaAnyaKatya', () => {
        expect(list.ToString()).to.equal('SashaDashaAnyaKatya');
    });

    it('Should return 4', () => {
        expect(list.size()).to.equal(4);
    });

    it('Should return Anya', () => {
        expect(list.get(2)).to.equal("Anya");
    });

    const list_1 = new LinkedList<string>();
    list_1.add("Marina");
    const list_2 = new LinkedList<string>();
    list_2.add("Marina");

    it('Should return true', () => {
        expect(list_1.equals(list_2)).to.equal(true);
    });

    const list_3 = new LinkedList<string>();
    list_3.add("Sasha");
    list_3.add("Dasha");
    list_3.add("Anya");
    list_3.add("Katya");

    list_3.remove(2);
    list_3.remove(0);

    it('Should return SashaDashaAnyaKatya', () => {
        expect(list_3.ToString()).to.equal('DashaKatya');
    });

});