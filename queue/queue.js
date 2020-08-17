class Queue{
    constructor(arr = []){
        this.arr = arr;
    }

    enqueue(ele){
        this.arr.push(ele);
    }

    dequeue (){
        return this.arr.shift();
    }

    length (){
        return this.arr.length;
    }

    peek (){
        return this.arr[0];
    }

    last (){
        return this.arr[this.arr.length-1];
    }

    isEmpty (){
        return this.arr.length === 0? true : false
    }

    getAllElements (){
        return this.arr;
    }
}

let queue = new Queue([1,2,3]);
queue.enqueue(4);
queue.dequeue();
queue.length();
queue.peek();
queue.last();
queue.isEmpty();
queue.getAllElements();