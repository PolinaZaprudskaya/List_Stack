class Node<T> {
    public value: T;
    public next = null;
    constructor(arg: T){
        this.value = arg;
        this.next = null;

    }
}

export class LinkedList<T> {
    private top = null;
    private size: number = 0;

    add(arg: T, index: number) {
        if (this.top == null) {
            let n = new Node<T>(arg);
            this.top = n;
            this.size += 1;
        } else if (index > this.size-1) {
            let a: Node<T> = this.top;
            while (a.next != null) {
                a = a.next;
            }
            let n = new Node<T>(arg);
            a.next = n;
            this.size += 1;
        } else {
            let a: Node<T> = this.top;
            let check: number = 0;
            while (a != null) {
                if (check == index) {
                    a.value = arg;
                }
                check += 1;
                a = a.next;
            }
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
            check += 1;
        }
    }

    ToString() {
        let a: Node<T> = this.top;
        let str: string = "";
        while (a != null) {
            str += a.value;
            a = a.next;
        }
        return str;
    }

    equals(stack_2: LinkedList<T>) {
        if (this.Size() != stack_2.Size()) {
            return false;
        }
        if ((this.ToString() !== stack_2.ToString())) {
            return false;
        }
        return true;
    }

    remove(index: number) {
        if (index > this.size - 1 || this.size == 0) {
            return null;
        } else if (index == 0) {
            this.top = this.top.next;
            this.size -= 1;
        } else {
            let a: Node<T> = this.top;
            let check: number = 0;
            while (a != null) {
                if (check == index - 1) {
                    a.next = a.next.next;
                    this.size--;
                }
                a = a.next;
                check += 1;
            }
        }
    }
}