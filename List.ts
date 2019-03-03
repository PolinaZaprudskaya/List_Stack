export class LinkedList<T>{
    private linked_list: LinkedList<T>;
    private key: number = 0;
    public add(arg: T): void{
        this.linked_list[this.key] = arg;
        this.key++;
    }
    public get<T>(index: number){
        console.log("Get: " + this.linked_list[index]);
        return this.linked_list[index];
    }
    public size<T>():number{
        return Object.keys(this.linked_list).length;

    }
    public ToString<T>(): string {
        let str: string = "";
        for (let key in this.linked_list) {
            str += this.linked_list[key].toString();
        }
        return str;
    }
    public equals<T>(arg: LinkedList<T>): boolean {
        if(this.linked_list.size() == arg.linked_list.size()) {
            for (let key in this.linked_list) {
                if((this.linked_list[key]).ToString() !== (arg.linked_list[key]).ToString() ) {
                    return false;
                }
            }
            return true;
        }
    }
    public hashcode<T>(): number {
        let hash = 0;
        for(let i=0;i<this.linked_list.size();i++){
            hash += Math.pow((this.linked_list.ToString()).charCodeAt(i)*31, this.linked_list.size() - i);
            hash = hash&hash;
        }
        return hash;
    }
    public remove<T>(index: number){
        if(this.linked_list.size() == 0 || index-1 > this.linked_list.size()) {
            console.log("Error");
        }
        let listik: LinkedList<T>;
        let check: number = 0;
        for( let key in this.linked_list){
            console.log(key);
            if (check == index-1){
                continue;
            }
            listik.linked_list.add(this.linked_list.get(check));
            check++;

        }


    }
}
