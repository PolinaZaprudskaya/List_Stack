import {LinkedList} from "./List";

const list = new LinkedList<string>();
list.add("Mobile",2);
list.add("products",10);
list.ToString();
list.get(2);
list.size();

const list_2 = new LinkedList<string>();
list_2.add("Mobile",2);
list_2.add("gh",10);



console.log("Equals: " + list.equals(list_2));
