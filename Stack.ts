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
            str += this.get(); //сделать полную копию стека
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

    hashcode(){
        let hash = 0;
        for(let i=0;i<this.size;i++){
            hash += Math.pow((this.ToString()).charCodeAt(i)*31, this.size - i);
            hash = hash&hash;
        }
        return hash;
    }

    print(){
        while(this.next != null){
            console.log(this.pop());
        }
    }
}