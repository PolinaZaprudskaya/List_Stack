import {LinkedList} from "./List";

const list = new LinkedList<string>();
list.add("Sasha", 2);
list.add("Dasha", 8);
console.log("Size: " + list.Size());
list.add("Polina", 2);
list.add("Katya", 8);

console.log("Size: " + list.Size());
list.print();

/*
const list_2 = new LinkedList<string>();
list_2.add("Mobile");
list_2.add("TV");



console.log("ToString: " + list.ToString());
console.log("Equals: " + list.equals(list_2));
console.log("Hashcode: " + list.hashcode());
list.remove(2);
console.log("ToString: " + list.ToString());
*/