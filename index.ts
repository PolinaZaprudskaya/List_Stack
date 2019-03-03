import {Stack} from "./Stack";

const stack = new Stack<number>();
stack.push(9);
stack.push(4);
stack.push(1);
stack.push(8);
stack.push(9);
console.log("ToString: " + stack.ToString());
console.log("Hashcode: " + stack.hashcode());
console.log("Size: " + stack.size());
stack.pop();
console.log("-----------");
console.log("ToString: " + stack.ToString());
console.log("Size: " + stack.size());
console.log("Hashcode: " + stack.hashcode());

const stack_1 = new Stack<number>();
stack_1.push(9);
stack_1.push(4);
stack_1.push(1);
stack_1.push(8);

console.log("Equals: " + stack.equals(stack_1))