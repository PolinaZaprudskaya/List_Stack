export class LinkedList<T>{
    private linked_list : { [index:number] : T } = {};
    public add(arg: T, index: number): void{
        this.linked_list[index] = arg;
    }
    public get(index: number){
        return this.linked_list[index];
    }
    public clear() {
        this.linked_list = {};
    }
    public print(){
        for( let key in this.linked_list){
            console.log(key);
        }
    }
/*
    public size<T>(){
        let arg: Array<T> = this.linked_list;
        console.log(arg.length);  // Array has a .length, so no more error
    }
    public remove<T>(index: number): T {

     }

    public equals<T>(): T {

    }
    public hashcode<T>(): T {

    }
    public toString<T>(): string{
        return this.linked_list.join(" ");
    }
*/
}
