// Stack Using function

let Stack = function(){

    this.count = 0;
    this.storage = {}

    this.push = function(value){
        this.storage[this.count] = value;
        this.count++;
    }

    this.pop = function(){
        if(this.count == 0){
            return undefined;
        }
        
        this.count--;
        let result = this.storage[this.count];
        delete this.storage[this.count];
        return result;
    }

    this.size = function(){
        return this.count;
    }

    this.peek = function(){
        return this.storage[this.count-1]
    }
}

let myStack = new Stack();
myStack.push(1)
myStack.push(2)
console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.peek());
myStack.push('avi')
console.log(myStack.size());
console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.peek());















// Palindrome

const letters = [];
const word = 'aviral';
let rword = '';

for (let i = 0; i< word.length; i++){
    letters.push(word[i])
}

for (let j = 0; j < word.length; j++) {
     rword += letters.pop();
}

console.log(rword)
if (rword === word)
console.log('palindrome')
else
console.log('not palindrome');