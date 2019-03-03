export class LinkedList<T>{
    //private linked_list : { [index:number] : T } = {}
    private linked_list: T[] = [];
    public add(arg: T, index: number): void{
        this.linked_list[index] = arg;
        console.log("Add: : " + arg);
    }
    public get<T>(index: number){
        console.log("Get: " + this.linked_list[index]);
        return this.linked_list[index];
    }
    public size<T>():number{
        console.log("Size: " + this.linked_list.length);
        return this.linked_list.length;
        /*
        console.log("Size: " + Object.keys(this.linked_list).length);
        return Object.keys(this.linked_list).length;
        */
    }
    public ToString<T>(): string {
        /*
        let str: string = "";
        for (let key in this.linked_list) {
            str += this.linked_list[key].toString();
        }
        console.log("ToString: " + str);
        return str;
        */
        console.log("ToString: " + this.linked_list.join(""));
        return this.linked_list.join("");
    }

/*
    public remove<T>(index: number): T {

     }
*/
    public equals<T>(arg: LinkedList<T>): boolean {
        console.log(this.linked_list);
        console.log(arg);
        if(this.linked_list.length == arg.size()) {
            for (let key in this.linked_list) {
                console.log("-----" + key + "-----");
                console.log(this.linked_list[key]);
                console.log(arg[key]);
                return this.linked_list[key] === arg[key];
            }
        }
    }
/*
    public hashcode<T>(): T {

    }
*/
}
