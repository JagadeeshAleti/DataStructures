const { Stack } = require('./Stack')

class Queue {
    constructor() {
        this.stack1 = new Stack()
        this.stack2 = new Stack()
    }

    enQueue(data) {
        this.stack1.push(data)
    }

    deQueue() {
        if (this.stack1.isEmpty()) {
            return "Queue is empty"
        } 
        while (!this.stack1.isEmpty()) {
            const topElement = this.stack1.pop()
            this.stack2.push(topElement)
        }
    
        const data = this.stack2.pop()

        while (!this.stack2.isEmpty()) {
            const topElement = this.stack2.pop()
            this.stack1.push(topElement)
        }
        return data
    }

}

var queue = new Queue()
queue.enQueue(100)
queue.enQueue(200)
queue.enQueue(300)
console.log(queue.deQueue())
console.log(queue.deQueue())
console.log(queue.deQueue())
console.log(queue.deQueue())