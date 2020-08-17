class Stack {
    constructor(arr=[]){
        this.arr = arr;
    }

    push (ele){
        this.arr.push(ele);
    }

    pop (){
        return this.arr.pop();
    }

    length (){
        return this.arr.length;
    }

    peek (){
        return this.arr[0];
    }

    search (ele){
        return this.arr.find((value)=> value === ele)
    }

    isEmpty (){
        return this.arr.length === 0 ? true : false
    }

    getAllElements (){
       return this.arr;
    }

}


let a = new Stack([1,2,3]);
a.push(4);
a.pop();
a.length();
a.peek();
a.search(2);
a.isEmpty();
a.getAllElements();

