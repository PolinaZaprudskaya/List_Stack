import {LinkedList} from "./List";

const list = new LinkedList<string>();
list.add("Sasha");
list.add("Dasha");
list.add("Anya");
list.add("Katya");
list.get(2);
list.size();
list.ToString();


const list_2 = new LinkedList<string>();
list_2.add("Mobile");
list_2.add("TV");



console.log("ToString: " + list.ToString());
console.log("Equals: " + list.equals(list_2));
console.log("Hashcode: " + list.hashcode());
list.remove(2);
console.log("ToString: " + list.ToString());
