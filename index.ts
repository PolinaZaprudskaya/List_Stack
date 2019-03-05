import {LinkedList} from "./List";

const list = new LinkedList<string>();
list.add_index("Sasha", 0);
list.add_index("Polina", 10);
list.add_index("Masha", 1);
list.add_index("Dasha", 3);
console.log("Size: " + list.Size());
list.print();

list.remove(3);
console.log("Size: " + list.Size());
list.print();
console.log("Get : " + list.get(1));
console.log("ToString: " + list.ToString());
console.log("Hashcode: " + list.hashcode());

const list_2 = new LinkedList<string>();
list_2.add_index("Sasha", 4);
list_2.add_index("Polina", 10);
list_2.add_index("Masha", 1);
list_2.add_index("Dasha", 3);

console.log("Equals: " + list.equals(list_2));
