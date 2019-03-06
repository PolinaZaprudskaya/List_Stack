class Node<T>{
    public next = null;
    public value: T;
    constructor(arg: T){
        this.value = arg;
        this.next = null;
    }
}

export class Stack<T>{
    private top = null;
    private size: number = 0;

    push(arg: T){
        let a = new Node<T>(arg);

        a.next = this.next;
        this.next = a;
        this.size += 1;
    }

    pop(){
        if(this.next == null){
            return null;
        }
        let result : T;
      //  console.log("this.next.value: " + this.next.value);
        result = this.next.value;

        this.next = this.next.next;
        this.size--;
        return result;
    }

    Size(){
        return this.size;
    }
    get(){
        if(this.next == null){
            return null;
        }
        let result : T;
        result = this.next.value;
        return result;
    }
    ToString(){
        let str: string = "";
        while(this.next != null) {
            str += this.get();
            this.next = this.next.next;
        }
        return str;
    }

    equals(stack_2: Stack<T>){
        if(this.Size() == stack_2.Size()) {
            if((this.ToString() !== stack_2.ToString() )){
                return false;
            }
            return true;
        }
        return false;
    }
}