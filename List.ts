export class LinkedList<T>{
    private linked_list: T[] = [];
    public add(arg: T, index: number): void{
        this.linked_list[index] = arg;
    }
    public get<T>(index: number){
        console.log("Get: " + this.linked_list[index]);
        return this.linked_list[index];
    }
    public size<T>():number{
        console.log("Size: " + this.linked_list.length);
        return this.linked_list.length;
    }
    public ToString<T>(): string {
        console.log("ToString: " + this.linked_list.join(""));
        return this.linked_list.join("");
    }
    public equals<T>(arg: LinkedList<T>): boolean {
        if(this.linked_list.length == arg.linked_list.length) {
            for (let key in this.linked_list) {
                if((this.linked_list[key]).toString() !== (arg.linked_list[key]).toString() ) {
                    return false;
                }
            }
            return true;
        }
    }
    public hashcode<T>(): number {
        let hash = 0;
        for(let i=0;i<this.linked_list.length;i++){
            hash += Math.pow((this.linked_list.join("")).charCodeAt(i)*31, this.linked_list.length - i);
            hash = hash&hash;
        }
        return hash;
    }
    /*
        public remove<T>(index: number): T {

         }
    */
}
