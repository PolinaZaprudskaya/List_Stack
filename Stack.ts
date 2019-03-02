export class Stack<T>{
    private stack : { [index:number] : T } = {};
    private index:number = 0;
    //private stack: T[] = [];
//push, pop, size, equals, hashcode, toString
    public push(arg: T){
        this.stack[this.index] = arg;
        this.index++;
        console.log("Push: " + arg);
        //Добавление в начало нужно!!!
    }
/*
    public pop(){

    }
    public equals<T>(){

    }
    public hashcode<T>(){

    }
*/
    public size():number{
        let arr: Array<T> = [];
        for (let key in this.stack) {
            arr.push(this.stack[key]);
        }
        console.log("Size: " + arr.length);
        return arr.length;

    }
    public ToString<T>(): string {
        let str: string = "";
        for (let key in this.stack) {
            str += this.stack[key].toString();
        }
        console.log("ToString: " + str);
        return str;
    }


}