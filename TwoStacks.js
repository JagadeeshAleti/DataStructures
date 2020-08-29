class twoStacks {
    constructor(size) {
        this.array = new Array(size)
        this.top1 = -1
        this.top2 = size
        this.size = size
    }
    push1(data) {
        if (this.top1+1 === this.top2) {
            return console.log("Stack is Overflow")
        }
        this.top1 = this.top1 + 1
        this.array[this.top1] = data 
    }

    push2(data) {
        if (this.top1+1 === this.top2) {
            return console.log("Stack is Overflow");
        }
        this.top2 = this.top2 - 1
        this.array[this.top2] = data
    }

    pop1() {
        if (this.top1 == -1) {
            return console.log("Stack1 is Underflow!!!!");
        }
        var deletedElement = this.array[this.top1]
        this.top1 = this.top1-1
        console.log("Deleted element is : " + deletedElement)
    }

    pop2() {
        if (this.top2 == this.size) {
            return console.log("Stack2 is Underflow!!!!");
        }
        var deletedElement = this.array[this.top2]
        this.top2 = this.top2 + 1
        console.log("Deleted element is : " + deletedElement)
    }

    display1() {
        if (this.top1 == -1) {
            return console.log("Stack1 is Underflow!!!!");
        }
        var str = ""
        for (var i = 0; i <= this.top1; i++) {
            str += this.array[i] + " "
        }
        console.log("Elements in the stack1 : [ " + str + "]");
    } 

    display2 () {
        if (this.top2 == this.size) {
            return console.log("Stack2 is Underflow!!!!");
        }
        var str = ""
        for (var i = this.size-1; i >= this.top2; i--) {
            str += this.array[i] + " "    
        }
        console.log("Elements in the stack2 : [ " + str + "]")
    }

    display3() {
        var str1 = " "
        var str2 = " "
        for (var i = 0; i <= this.top1; i++) {
            str1 += this.array[i] + " "
        }
        for (var i = this.size-1; i >= this.top2; i--) {
            str2 += this.array[i] + " "    
        }
        
        console.log("Elements in the array : [" + str1 + "|" + str2 + "]");
    }

}

var stack = new twoStacks(10) 
stack.push1(10)
stack.push1(20)
stack.push1(30)
stack.push1(40)
stack.push1(50)
stack.push1(60)
// stack.pop1()
// stack.pop1()
// stack.pop1()


stack.push2(70)
stack.push2(80)
// stack.push2(90)
// stack.push2(100)

// stack.pop2()
// stack.pop2()
// stack.pop2()

stack.display1()
stack.display2()
stack.display3()

// stack.pop1()
// stack.pop1()
// stack.pop1()
// stack.pop2()
// stack.pop2()
// stack.pop2()


// stack.display1()
// stack.display2()
// stack.display3()
