export class LinkedList<T>{
   // private linked_list: LinkedList<T>;
    private linked_list: T[];
    private key: number;
    constructor(){
        this.key = 0;
        this.linked_list = [];
    }
    public add(arg: T): void{
        this.linked_list[this.key] = arg;
        this.key++;
        console.log("Push " + arg);
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
        if(this.size() == 0 || index-1 > this.size()) {
            console.log("Error");
        }
        let listik: LinkedList<T>;
        console.log("LISTICK " + listik);
        let check: number = 0;
        for( let i in this.linked_list){
            console.log(i);
            if (check == index-1){
                continue;
            }
            console.log("get(check): " + this.get(check));

            listik.add(this.get(check));
            check++;

        }


    }
}
