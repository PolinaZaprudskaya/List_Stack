import {Stack} from "./Stack";
let a: number;
const stack = new Stack<number>();
stack.push(9);
stack.push(4);
stack.push(1);
stack.push(8);
stack.push(9);
stack.ToString();
a = stack.size();
console.log(a);
