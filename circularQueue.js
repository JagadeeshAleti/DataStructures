class circularQueue {
    constructor(size) {
        this.array = new Array(size)
        this.front = -1
        this.rear = -1
        this.size = size
    }    
    enQueue(element) {
        if ((this.front == 0 && this.rear == this.size-1)) {
            console.log("\nOverflow!!!")
            return
        }
        if (this.front == -1) {
            this.front = 0
        }
        if (this.rear == this.size - 1) {
            this.rear = 0
        }  else {
            this.rear = this.rear + 1
        }
        this.array[this.rear] = element
        console.log("\n" + element + " is insesrted into queue")
    }
    deQueue() {
        if (this.front == -1) {
            console.log("\nUnderflow!!!!")
            return
        }
        const data = this.array[this.front] 
        if (this.front == this.size - 1) {
            this.front = 0
        } else {
            this.front = this.front + 1
        }
        return data
    }
    display() {
        if (this.front == -1) {
            console.log("Underflow!!!!")
            return
        }
        var str = ""; 
        if (this.rear >= this.front) {
            for (var i = this.front; i <= this.rear; i++) 
                str += this.array[i] + " "
        } else {
            for (var i = this.front; i < this.size ; i++) {
                str += this.array[i] + " "
            }
            for (var i = 0; i <= this.rear; i++) {
                str += this.array[i] + " "
            }
        }

        return str;

    }
}

var queue = new circularQueue(5)
queue.enQueue(10)
queue.enQueue(20)
queue.enQueue(30)
queue.enQueue(40)
queue.enQueue(50)

console.log("\nDeleted element is " + queue.deQueue())
queue.enQueue(60)
console.log("\nDeleted element is " + queue.deQueue())
queue.enQueue(70)
console.log("\nDeleted element is " + queue.deQueue())
console.log("\nDeleted element is " + queue.deQueue())
console.log("\nDeleted element is " + queue.deQueue())
var result = queue.display()
console.log("\nElements of queue : [ " + result + "]")  