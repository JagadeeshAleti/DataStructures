const { Queue } = require('./Queue')

class Stack {
    constructor() {
        this.queue1 = new Queue()
        this.queue2 = new Queue()
    }
    push(data) {
        while(!this.queue1.isEmpty()) {
            var temp = this.queue1.delete()
            this.queue2.insert(temp)
        }
        this.queue1.insert(data)
        while(!this.queue2.isEmpty()) {
            var temp = this.queue2.delete()
            this.queue1.insert(temp);
        }
    }

    pop() {
        if (this.queue1.isEmpty()) {
            return "Stack is empty"
        }
        return this.queue1.delete()
    }
}

var stack = new Stack()
stack.push(10)
stack.push(20)
stack.push(30)
console.log(stack.pop())
console.log(stack.pop())
console.log(stack.pop())
console.log(stack.pop())