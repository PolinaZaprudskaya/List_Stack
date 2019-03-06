import {LinkedList} from "./List";

const list = new LinkedList<string>();
list.add("Sasha", 0);
list.add("Polina", 10);
list.add("Masha", 1);
list.add("Dasha", 3);
console.log("Size: " + list.Size());
console.log("ToString: " + list.ToString());
list.remove(2);
console.log("Size: " + list.Size());
console.log("Get : " + list.get(1));
console.log("ToString: " + list.ToString());
const list_2 = new LinkedList<string>();
list_2.add("Sasha", 4);
list_2.add("Polina", 10);
list_2.add("Masha", 1);
list_2.add("Dasha", 3);

console.log("Equals: " + list.equals(list_2));
const list_3 = new LinkedList();
list_3.add("Sasha", 0);
list_3.add("Polina", 10);
list_3.add("Masha", 2);

list_3.add("Dasha", 3);
list_3.remove(3);
console.log("ToString: " + list_3.ToString());
