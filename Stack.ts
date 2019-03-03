export class Stack<T>{
    private stack : { [index:number] : T } = {};
    private index:number = 0;
    //push, pop, size, equals, hashcode, toString
    public push(arg: T){
        this.stack[this.index] = arg;
        this.index++;
        console.log("Push: " + arg);
    }
    public size<T>():number{
        console.log("Size: " + Object.keys(this.stack).length);
        return Object.keys(this.stack).length;
    }
    public ToString<T>(): string {
        let str: string = "";
        for (let key in this.stack) {
            str += this.stack[key].toString();
        }
        console.log("ToString: " + str);
        return str;
    }
    /*
        public pop(){

        }
        public equals<T>(){

        }
        public hashcode<T>(){

        }
    */

}