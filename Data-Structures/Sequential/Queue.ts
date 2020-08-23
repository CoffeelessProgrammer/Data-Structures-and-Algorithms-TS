import Node from '../Linked-Lists/SinglyNode.ts';


export default class Queue<T> {
  private last: Node<T> | null;
  private first: Node<T>| null;
  private length: number;

  constructor() {
    this.last = null;
    this.first = null;
    this.length = 0;
  }

  public getLength(): number {
    return this.length;
  }

  public isEmpty(): boolean {
    return this.length === 0;
  }

  public peek(): T | null {
    return this.first?.getValue() || null;
  }

  public enqueue(value: T): boolean {
    const newNode = new Node(value);

    if (!this.last) {                         // If empty queue, initialize
      this.first = newNode;
      this.last = newNode;
    }
    else {
      this.last.setNext(newNode);
      this.last = this.last.getNext();
    }

    ++this.length;
    return true;
  }

  public dequeue(): T | any {
    if (!this.first) return null;             // Edge case: Empty queue

    if (this.length === 1) {                  // Edge case: Queue has 1 element, so a dequeue should reset the queue's state
      this.last = null;                       // Challenge: What is the state of each 'class field' after a dequeue when 1 element was remaining?
    }

    const value = this.first.getValue();
    this.first = this.first.getNext();

    --this.length;
    return value;
  }
}

function printQueue(queue: Queue<any>) {
  console.log(JSON.stringify(queue));
}

function printPeekQueue(queue: Queue<any>) {
  console.log('Peeking... Found', JSON.stringify(queue.peek()));
}

function printDequeue(queue: Queue<any>) {
  console.log('Dequeued:', JSON.stringify(queue.dequeue()));
}


//---------------------------------------------------------------------
// ----------                 MAIN PROGRAM                   ----------
//---------------------------------------------------------------------
if (import.meta.main) {

  const ATLA = new Queue<string>();

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

  // RUN: deno run Data-Structures/Sequential/Queue.ts
}


// --------------------------- Terminal Output: ---------------------------
// Peeking... Found null
// Peeking... Found "Sokka"
// {"last":{"value":"Appa","next":null},"first":{"value":"Sokka","next":{"value":"Katara","next":{"value":"Aang","next":{"value":"Appa","next":null}}}},"length":4}       
// Dequeued: "Sokka"
// Dequeued: "Katara"
// Dequeued: "Aang"
// {"last":{"value":"Appa","next":null},"first":{"value":"Appa","next":null},"length":1}
// Dequeued: "Appa"
// {"last":null,"first":null,"length":0}
// {"last":{"value":"Iroh","next":null},"first":{"value":"Zuko","next":{"value":"Iroh","next":null}},"length":2}