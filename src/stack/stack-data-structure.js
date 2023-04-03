class Stack {
  constructor() {
    this.stackControl = [];
    this.MAX_SIZE = 10;
  }

  canPush() {
    if (this.stackControl.length < this.MAX_SIZE) {
      return true;
    } else {
      return false;
    }
  }

  isEmpty() {
    if (this.stackControl.length === 0) {
      return true;
    } else {
      return false;
    }
  }

  push(item) {
    if (this.canPush()) {
      this.stackControl.push(item);
      return this.stackControl;
    } else {
      throw new Error('STACK_OVERFLOW');
    }
  }

  pop() {
    if (this.isEmpty()) {
      throw new Error('STACK_UNDERFLOW');
    } else {
      return this.stackControl.pop();
    }
  }

  display() {
    return this.stackControl;
  }
}


constructor() {
  this.queueControl = [];
  this.MAX_SIZE = 10;
}

canEnqueue() {
  // ... your code goes here
}

isEmpty() {
  // ... your code goes here
}

enqueue(item) {
  // ... your code goes here
}

dequeue() {
  // ... your code goes here
}

display() {
  // ... your code goes here
}  
}