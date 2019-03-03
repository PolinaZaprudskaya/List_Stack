export class Stack<T>{
   // private stack : { [index:number] : T } = {};
    private stack: T[] = [];
    private index:number = 0;
    //push, pop, size, equals, hashcode, toString
    public push(arg: T){
      /*  this.stack[this.index] = arg;
        this.index++;
        console.log("Push: " + arg);
        */
      console.log("Push: " + arg);
      this.stack.push(arg);
    }
    public size<T>():number{
       /* console.log("Size: " + Object.keys(this.stack).length);
        return Object.keys(this.stack).length;*/
        console.log("Size: " + this.stack.length);
        return this.stack.length;
    }
    public ToString<T>(): string {
      /*  let str: string = "";
        for (let key in this.stack) {
            str += this.stack[key].toString();
        }
        console.log("ToString: " + str);
        return str;
        */
        console.log("ToString: " + this.stack.join(""));
        return this.stack.join("");
    }
    public pop(){
        console.log("---pop---");
        return this.stack.pop();
    }
/*      public equals<T>(){

        }
        public hashcode<T>(){

        }
    */

}