import {LinkedList} from "./List";

const list = new LinkedList<string>();
list.add("Mobile");
list.add("TV");
list.ToString();
list.get(2);
list.size();

const list_2 = new LinkedList<string>();
list_2.add("Mobile");
list_2.add("TV");



console.log("Equals: " + list.equals(list_2));
console.log("Hashcode: " + list.hashcode());
list.remove(1);
