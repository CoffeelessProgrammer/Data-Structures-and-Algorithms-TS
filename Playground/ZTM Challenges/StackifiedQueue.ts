import Stack from '../../Data-Structures/Sequential/Stack.ts';

// Ahhhhh! What a glorious day to do things just because we can! ^.^

class StackifiedQueue<T> {
  private first: Stack<T>;    // Stack with elements ordered first-on-top
  private last: Stack<T>;     // Stack with elements ordered last-on-top
  private length: number;

  constructor() {
    this.first = new Stack();
    this.last = new Stack();
    this.length = 0;
  }

  public getlength(): number {
    return this.length;
  }

  public isEmpty(): boolean {
    return this.length === 0;
  }

  public enqueue(value: T): boolean {

    // Transfer all items from first-on-top to last-on-top
    this._populateLastOnTop();

    // Add to end of line, i.e. push to last-on-top stack
    this.last.push(value);
    ++this.length;

    return true;
  }

  public dequeue(): T | null {
    if(this.length === 0) return null;

    this._populateFirstOnTop();
    --this.length;

    return this.first.pop();
  }

  public peek(): T | null {
    if (this.length === 0) return null;
    this._populateFirstOnTop();
    return this.first.peek();
  }

  private _populateFirstOnTop(): void {
    if (this.first.getLength() > 0) return;

    for (let i = 0; i < this.length; ++i) {
      this.first.push(this.last.pop());
    }
  }

  private _populateLastOnTop(): void {
    if (this.last.getLength() > 0) return;

    for (let i = 0; i < this.length; ++i) {
      this.last.push(this.first.pop());
    }
  }
}

function printQueue(queue: StackifiedQueue<any>) {
  console.log(JSON.stringify(queue));
}

function printPeekQueue(queue: StackifiedQueue<any>) {
  console.log('Peeking... Found', JSON.stringify(queue.peek()));
}

function printDequeue(queue: StackifiedQueue<any>) {
  console.log('Dequeued:', JSON.stringify(queue.dequeue()));
}


//---------------------------------------------------------------------
// ----------                 MAIN PROGRAM                   ----------
//---------------------------------------------------------------------
if (import.meta.main) {

  const ATLA = new StackifiedQueue<string>();

  printPeekQueue(ATLA);
  ATLA.enqueue('Sokka');
  ATLA.enqueue('Katara');
  printPeekQueue(ATLA);
  ATLA.enqueue('Aang');
  ATLA.enqueue('Appa');

  printQueue(ATLA);

  printDequeue(ATLA);
  printDequeue(ATLA);
  printDequeue(ATLA);

  printQueue(ATLA);
  
  printDequeue(ATLA);

  printQueue(ATLA);

  ATLA.enqueue('Zuko');
  ATLA.enqueue('Iroh');

  printQueue(ATLA);

  // RUN: deno run Playground/Challenges/StackifiedQueue.ts
}

// --------------------------- Terminal Output: ---------------------------
// Peeking... Found null
// Peeking... Found "Sokka"
// {"first":{"length":0,"values":[null,null]},"last":{"length":4,"values":["Sokka","Katara","Aang","Appa"]},"length":4}
// Dequeued: "Sokka"
// Dequeued: "Katara"
// Dequeued: "Aang"
// {"first":{"length":1,"values":["Appa",null,null,null]},"last":{"length":0,"values":[null,null,null,null]},"length":1}
// Dequeued: "Appa"
// {"first":{"length":0,"values":[null,null,null,null]},"last":{"length":0,"values":[null,null,null,null]},"length":0}
// {"first":{"length":0,"values":[null,null,null,null]},"last":{"length":2,"values":["Zuko","Iroh",null,null]},"length":2}