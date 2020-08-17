export default class Stack<T> {
  private length: number;
  private values: Array<T>;

  constructor() {
    this.length = 0;
    this.values = new Array<T>();
  }

  public getLength(): number {
    return this.length;
  }

  public peek(): T | null {
    return this.values[this.length-1] || null;
  }

  public push(value: T): boolean {
    this.values[this.length] = value;
    ++this.length;
    return true;
  }

  public pop() {
    const value = this.values[this.length-1];
    delete this.values[this.length-1];
    --this.length;
    return value;
  }
}

function printStack(stack: Stack<any>) {
  console.log(JSON.stringify(stack));
}

function printPopStack(stack: Stack<any>) {
  console.log('Popped:', stack.pop());
}

function printPeekStack(stack: Stack<any>) {
  console.log('Peeking... Found', stack.peek());
}

//---------------------------------------------------------------------
// ----------                 MAIN PROGRAM                   ----------
//---------------------------------------------------------------------
if (import.meta.main) {

  const ATLA = new Stack<string>();

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

  // RUN: deno run Data-Structures/Sequential/Stack.ts
}