class Stack {
    constructor() {
        this.array = []
        this.top = -1
    }

    push(element) {
        this.top = this.top + 1
        this.array[this.top] = element
        // console.log(element + ' pushed into stack')
    }

    pop() {
        if (this.top === -1) {
            return "Stack is underflow"
        }
        else {
            const deletedElement = this.array[this.top]
            this.top = this.top - 1
            return deletedElement
        }
    }

    printStack() { 
        var str = ""; 
        for (var i = 0; i <= this.top; i++) 
            str += this.array[i] + " "; 
        return str; 
    } 

    isEmpty() {
        return this.top === -1
    }
}

function play() {
    var stack = new Stack()

    stack.push(10)
    stack.push(20)
    stack.push(30)
    stack.push(40)
    console.log("\nDeleted element is : " + stack.pop())

    var result = stack.printStack()
    console.log("\nElements in the Stack : [ " + result + "]")
}

module.exports.Stack = Stack 