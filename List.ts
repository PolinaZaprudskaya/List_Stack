export class LinkedList<T>{

    private next = null;
    private value: T;
    private top = this;
    private size: number = 0;

    add(arg: T, index: number){
        let a = new LinkedList<T>();
        let peak = this.top;
        while(peak.next != null){
            peak = peak.next;
        }
        a.value = arg;
        a.next = peak.next;
        peak.next = a;
        this.size++;
        console.log(a);/*
        while(this.top.next != null){
            this.top = this.top.next;
        }
        a.value = arg;
        a.next = this.top.next;
        this.top.next = a;
*/
        /*if(index >= this.size){
            let i: number = 0;
            while(i == index-this.size-1){
                let a = new LinkedList<T>();
                a.next = this.top.next;
                this.top.next = a;
                this.size++;
            }
            let a = new LinkedList<T>();
            a.value = arg;
            a.next = this.top.next;
            this.top.next = a;

        }
        if(index < this.size){
            let i: number = 0;
            let check: number = 0;
            while(this.top != null){
                if(check==index){
                    this.value = arg;
                }
                check++;
            }
        }
*/
    }
    remove(index: number){
        //console.log(this.top.value);
        let peak = this.top;
        if(this.next == null){
            return null;
        }
        if(index > this.size || this.size == 0){
            return null;
        }

        let check: number = 0;
        while(peak != null){
            if(check == index-1){
                peak.next = peak.next.next;
               // this.next = this.next.next;
                this.size--;
            }
            //this.next = this.next.next;
            peak = peak.next;
        }
    }

    get(index: number){
        if(index > this.size){
            return null;
        }
        let check: number = 0;
        while(this.top != null){
            if(index == check){
                return this.value;
            }
            check++;
            this.top = this.top.next;
        }
    }
    Size(){
        return this.size;
    }
    print(){
        while(this.top != null){
            let result : T;
            result = this.next.value;
            this.next = this.next.next;
            console.log(result);
            this.top = this.top.next;
        }
    }
    ToString(){

    }
    equals(){

    }
    hashcode(){

    }
   /* private linked_list: T[] = [];
    private key: number = 0;

    public add(arg: T): void{
        this.linked_list[this.key] = arg;
        this.key++;
    }

    public get(index: number): T {
        return this.linked_list[index];
    }

    public size<T>():number{
        return this.linked_list.length;
    }

    public ToString<T>(): string {
        let str: string = "";
        for (let key in this.linked_list) {
            str += this.linked_list[key].toString();
        }
        return str;
    }

    public equals<T>(arg: LinkedList<T>): boolean {
        if(this.size() == arg.size()) {
                if(this.ToString() !== arg.ToString() ) {
                    return false;
                }
            return true;
        }
        return false;
    }

    public hashcode<T>(): number {
        let hash = 0;
        for(let i=0;i<this.size();i++){
            hash += Math.pow((this.ToString()).charCodeAt(i)*31, this.size() - i);
            hash = hash&hash;
        }
        return hash;
    }

    public remove(index: number){
        delete this.linked_list[index];
    }
    */
}
