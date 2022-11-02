function Queue(){
    collection = [];
    this.print = function(){
        console.log(collection);
    }
    this.size = function(){
        return collection.length;
    }
    this.front = function(){
        return collection[0];
    }
    this.enqueue = function(e){
        return collection.push(e)
    }
    this.dequeue = function(){
        return collection.shift()
    }
    this.isEmpty = function(){
        return collection.length === 0;
    }
}

// let queue = new Queue()
// queue.isEmpty()
// queue.enqueue(1)
// queue.enqueue('a')
// queue.enqueue(2)
// queue.print()
// queue.dequeue()
// queue.print()
// console.log(queue.isEmpty())


function PriorityQueue(){
    collection = [];
    this.print = function(){
        console.log(collection);
    }
    this.size = function(){
        return collection.length;
    }
    this.front = function(){
        return collection[0];
    }
    this.enqueue = function(e){
        if(this.isEmpty()){
            collection.push(e)
        }
        else{
            let added = false;
            for (let i = 0; i < collection.length; i++) {
                 if(collection[i][1]>e[1]){
                 collection.splice(i,0,e)
                 added = true;
                 break;
                 }
            }
            if(!added){
                collection.push(e)
            }
        }
    }
    this.dequeue = function(){
        return collection.shift()
    }
    this.isEmpty = function(){
        return collection.length === 0;
    }
}

let priorityQueue = new PriorityQueue()
priorityQueue.enqueue(['a',1])
priorityQueue.enqueue(['b',2])
priorityQueue.enqueue(['c',1])
priorityQueue.print()
priorityQueue.dequeue()
priorityQueue.print()
