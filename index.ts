import {Stack} from "./Stack";
const stack = new Stack<number>();
stack.push(9);
console.log("Size: " + stack.Size());
stack.push(9);
stack.push(4);
stack.push(3);
console.log("Size: " + stack.Size());
//console.log("Get: " + stack.get());
//console.log("Hashcode: " + stack.hashcode());
//console.log("ToString: " + stack.ToString());

const stack_2 = new Stack<number>();
stack_2.push(9);
stack_2.push(9);
stack_2.push(4);
stack_2.push(3);
//console.log("ToString: " + stack_2.ToString());
console.log("Equals: "+ stack.equals(stack_2));
