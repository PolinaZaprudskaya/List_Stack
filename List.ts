export class LinkedList<T>{
    private linked_list : { [index:number] : T } = {}

    public add(arg: T, index: number): void{
        this.linked_list[index] = arg;
        console.log("Add: : " + arg);
    }
    public get(index: number){
        console.log("Get: " + this.linked_list[index]);
        return this.linked_list[index];
    }
    public size<T>():number{
        console.log("Size: " + Object.keys(this.linked_list).length);
        return Object.keys(this.linked_list).length;
    }
    public ToString<T>(): string {
        let str: string = "";
        for (let key in this.linked_list) {
            str += this.linked_list[key].toString();
        }
        console.log("ToString: " + str);
        return str;
    }

/*
    public remove<T>(index: number): T {

     }
    public equals<T>(): T {

    }
    public hashcode<T>(): T {

    }
*/
}
