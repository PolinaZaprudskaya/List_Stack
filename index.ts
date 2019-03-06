import {LinkedList} from "./List";

const list = new LinkedList<string>();
list.add_index("Sasha", 0);
list.add_index("Polina", 10);
list.add_index("Masha", 1);
list.add_index("Dasha", 3);
console.log("Size: " + list.Size());
list.print();
console.log("ToString: " + list.ToString());
console.log("Hashcode: " + list.hashcode());
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
const list_3 = new LinkedList();
list_3.add_index("Sasha", 0);
list_3.add_index("Polina", 10);
list_3.add_index("Masha", 2);

list_3.add_index("Dasha", 3);
list_3.remove(3);
console.log("ToString: " + list_3.ToString());
