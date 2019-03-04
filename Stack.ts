export class Stack<T>{
    private next = null;
    private value: T;
    private size: number = 0;

    push(arg: T){
        let a = new Stack<T>();
        a.value = arg;
        a.next = this.next;
        this.next = a;
        this.size++;
    }
    pop(){
        if(this.next == null){
            return null;
        }
        let result : T;
        result = this.next.value;
        this.next = this.next.next;
        this.size--;
        return result;
    }
    Size(){
        return this.size;
    }
   /* print(){
        while(this.next != null){
            console.log(this.pop());
        }
    }*/
    ToString(){

    }
    equals(){

    }
    hashcode(){

    }

    /* private stack: T[] = [];

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
*/
}