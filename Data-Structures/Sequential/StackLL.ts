import Node from '../Linked-Lists/NodeLL.ts';


export default class StackLL<T> {
  private top: Node<T> | null;
  private bottom: Node<T> | null;
  private length: number;

  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  public getLength(): number {
    return this.length;
  }

  public peek(): T | null {
    return this.top?.getValue() || null;
  }

  public push(value: T): boolean {
    const newNode = new Node<T>(value);

    if (!this.top) {                      // If stack is empty, initialize
      this.top = newNode;
      this.bottom = newNode;
    }
    else {                                // Else manipulate pointers
      newNode.setNext(this.top);
      this.top = newNode;
    }
    /*  Challenge (Alternate Else Clause):
     *    1. How does the code below behave and why is it incorrect?
     *    2. What are the consequences to time complexity?
     */
    // else {
    //   this.top.setNext(newNode);          // Else, set next node of LL to new value
    //   this.top = this.top.getNext();      // And move 'top' pointer forward
    // }

    ++this.length;                        // Increment length
    return true;
  }

  public pop(): T | null {
    if (!this.top) return null;           // If empty stack, return null

    if (this.length === 1) {
      this.bottom = null;
    }

    const value = this.top.getValue();    // Retrieve top value of stack
    this.top = this.top.getNext();        // Move top pointer to next node

    // On line 55, the reference to the top most node of the stack is lost
    // The node is now floating in memory, waiting patiently for the garbage collector

    --this.length;
    return value;
  }
}

function printStack(stack: StackLL<any>) {
  console.log(JSON.stringify(stack));
}

function printPopStack(stack: StackLL<any>) {
  console.log('Popped:', stack.pop());
}

function printPeekStack(stack: StackLL<any>) {
  console.log('Peeking:', stack.peek());
}

//---------------------------------------------------------------------
// ----------                 MAIN PROGRAM                   ----------
//---------------------------------------------------------------------
if (import.meta.main) {

  const ATLA = new StackLL<string>();

  printPeekStack(ATLA);
  ATLA.push('Sokka');
  ATLA.push('Katara');
  printPeekStack(ATLA);
  ATLA.push('Aang');
  ATLA.push('Appa');

  printStack(ATLA);

  printPopStack(ATLA);

  printStack(ATLA);

  printPopStack(ATLA);
  printPopStack(ATLA);
  printPopStack(ATLA);

  printStack(ATLA);
  
  ATLA.push('Zuko');
  ATLA.push('Iroh');

  printStack(ATLA);

  // RUN: deno run Data-Structures/Sequential/StackLL.ts
}