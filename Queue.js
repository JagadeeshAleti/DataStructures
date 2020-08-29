class Queue {
    constructor() {
        this.front = -1
        this.rear = -1
        this.array = []
    }

    insert(element) {
        this.rear = this.rear + 1
        this.array[this.rear] = element
    }

    delete() {
        if ( this.front === this.rear) {
            console.log("Queue is underflow")
        } else {
            this.front = this.front + 1
            const deletedElement = this.array[this.front]
            return deletedElement
        }
    }

    printQueue() {
        var str = ""; 
        for (var i = this.front+1; i <= this.rear; i++) 
            str += this.array[i] + " "; 
        return str; 
    }

    isEmpty() {
        return this.front === this.rear 
    }
   
}
function play() {
    var queue = new Queue()
    
    queue.insert(10)
    queue.insert(20)
    queue.insert(30)
    queue.insert(40)

    console.log("\nDeleted element is : " + queue.delete())

    var result = queue.printQueue()
    console.log("\nElements in the Queue : [ " + result + "]")
}

module.exports.Queue = Queue