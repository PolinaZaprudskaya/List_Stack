export class Stack<T>{
    private stack: T[] = [];

    public push(arg: T){
      this.stack.push(arg);
    }

    public size<T>():number{
        return this.stack.length;
    }

    public ToString<T>(): string {
        return this.stack.join("");
    }

    public pop(){
       return this.stack.pop();
    }

    public equals<T>(arg: Stack<T>): boolean {
        if(this.stack.length == arg.stack.length) {
            for (let key in this.stack) {
                if((this.stack[key]).toString() !== (arg.stack[key]).toString() ) {
                    return false;
                }
            }
            return true;
        }
        return false;
    }

    public hashcode<T>(): number {
        let hash = 0;
        for(let i=0;i<this.stack.length;i++){
            hash += Math.pow((this.stack.join("")).charCodeAt(i)*31, this.stack.length - i);
            hash = hash&hash;
        }
        return hash;
    }

}