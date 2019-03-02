import {LinkedList} from "./List";

const list = new LinkedList<string>();
list.add("Mobile",2);
list.add("products",10);
list.toString();
console.log(list.get(2));
list.print();
list.add("Polina",2);
console.log(list.get(2));
list.clear();

const list_string = new LinkedList<string>();
list_string.add("Node Js ",4);
list_string.print();
