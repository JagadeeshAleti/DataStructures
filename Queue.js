class Queue {
    constructor() {
        this.front = -1
        this.rear = -1
        this.array = []
    }


    insert(element) {

        
        this.rear = this.rear + 1
        this.array[this.rear] = element
        console.log(element + " is inserted into queue\n")
    }

    delete() {
        if ( this.front === this.rear) {
            console.log("underflow")
        } else {
            this.front = this.front + 1
            const data = this.array[this.front]
            return data
        }
    }

    display() {
        var str = ""; 
        for (var i = this.front+1; i <= this.rear; i++) 
            str += this.array[i] + " "; 
        return str; 
    }
}

var queue = new Queue()
queue.insert(10)
queue.insert(20)
queue.insert(30)
queue.insert(40)
console.log("\nDeleted element is : " + queue.delete())
console.log("\nDeleted element is : " + queue.delete())
console.log("\nDeleted element is : " + queue.delete())
var result = queue.display()
console.log("\nElements in the Stack : " + result)