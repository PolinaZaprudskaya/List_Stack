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
        a.next = this.top;
        this.top = a;
        this.size += 1;
    }

    pop(){
        if(this.top == null){
            return null;
        }
        let result : T;
        result = this.top.value;
        this.top = this.top.next;
        this.size--;
        return result;
    }

    Size(){
        return this.size;
    }
    get(){
        if(this.top == null){
            return null;
        }
        return this.top.value;
    }
    ToString(){
        let str: string = "";
        while(this.top != null) {
            str += this.get();
            this.top = this.top.next;
        }
        return str;
    }

    equals(stack_2: Stack<T>){
        return this.ToString() === stack_2.ToString();
    }
}