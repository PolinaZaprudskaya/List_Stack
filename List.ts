class Node<T>{
    public value: T;
    public next = null;
}
export class LinkedList<T> {
    private top = null;
    private size: number = 0;

//remove, equals, hashcode
    add_index(arg: T, index: number) {
        if (index > this.size || index == 0) {
            while (index - this.size != 0) {
                this.add(null);
            }
            this.add(arg);
        }
        else if (index <= this.size) {
            let a: Node<T> = this.top;
            let check: number = 0;
            while (a != null) {
                if (check == index) {
                    a.value = arg;
                }
                check++;
                a = a.next;
            }
        }

    }

    add(arg: T) {//в конец
        if (this.top == null) {
            let n = new Node<T>();
            n.value = arg;
            this.top = n;
            this.size++;
            n.next = null;
        } else {
            let a: Node<T> = this.top;
            while (a.next != null) {
                a = a.next;
            }
            let n = new Node<T>();
            n.value = arg;
            a.next = n;
            n.next = null;
            this.size++;

        }
    }

    print() {
        let a: Node<T> = this.top;
        while (a != null) {
            console.log(a.value);
            a = a.next;
        }
    }

    Size() {
        return this.size;
    }

    get(index: number) {
        if (index > this.size || this.top == null) {
            return null;
        }
        let a: Node<T> = this.top;
        let check: number = 0;
        while (a != null) {
            if (check == index) {
                return a.value;
            }
            a = a.next;
            check++;
        }
    }

    ToString() {
        let a: Node<T> = this.top;
        let str: string = "";
        while (a != null) {
            /*if(a.value == null){
                a = a.next;
                continue;
            }
            */
            str += a.value;
            a = a.next;
        }
        return str;
    }

    equals(stack_2: LinkedList<T>) {
        if (this.Size() == stack_2.Size()) {
            if ((this.ToString() !== stack_2.ToString())) {
                return false;
            }
            return true;
        }
        return false;
    }

    hashcode() {
        let hash = 0;
        for (let i = 0; i < this.size; i++) {
            hash += Math.pow((this.ToString()).charCodeAt(i) * 31, this.size - i);
            hash = hash & hash;
        }
        return hash;
    }

    remove(index: number){
        if(index > this.size-1 || this.size == 0){
            return null;

        }
        else if(index == 0){
            this.top = this.top.next;
            this.size--;
        }
        else{
            let a: Node<T> = this.top;
            let check: number = 0;
            while (a != null) {
                if (check == index - 1) {
                    a.next = a.next.next;
                    this.size--;
                }
                a = a.next;
                check++;
            }
        }
    }

}