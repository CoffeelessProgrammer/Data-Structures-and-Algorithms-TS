import Node from './SinglyNode.ts';

export default class LinkedList<T> {
  private head: Node<T> | null;
  private tail: Node<T> | null;
  private length: number;

  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  public getLength(): number {
    return this.length;
  }

  public getHeadValue(): T | any {
    return this.head?.getValue();
  }

  public getTailValue(): T | any {
    return this.tail?.getValue();
  }

  public isEmpty(): boolean {
    return this.length === 0;
  }

  /**
   * Remove all nodes from list. Constant Time O(1)
   */
  public empty(): boolean {
    this.head = null;
    this.tail = null;
    this.length = 0;
    return true;
  }

  public append(value: T): boolean {
    const newNode = new Node(value);

    if (!this.tail) {
      this.head = newNode;
      this.tail = newNode;
    }
    else {
      this.tail.setNext(newNode);
      this.tail = this.tail.getNext();
    }
    ++this.length;

    return true;
  }

  public prepend(value: T): boolean {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.setNext(this.head);
      this.head = newNode;
    }
    ++this.length;

    return true;
  }

  public insert(value: T, atIndex: number): boolean | null {
    if (atIndex < 0 || atIndex > this.length) return null;
    if (!this.head) {
      this.prepend(value);
      return true;
    }
    if (atIndex === this.length) {
      this.append(value);
      return true;
    }

    const newNode = new Node(value);

    let currentNode = this._traverseToNode(atIndex-1);
    newNode.setNext(currentNode?.getNext());
    currentNode?.setNext(newNode);

    ++this.length;

    return true;
  }

  public removeElementAtIndex(index: number): T | null {
    if (index > this.length-1 || index < 0) return null;
    if (this.length === 0 || !this.head) return null;

    let value = null;

    if (index===0) {
      value = this.head.getValue();
      this.head = this.head.getNext();                // Manipulate pointers to mark deleted Node for garbage collection
    }
    else {
      let leader = this._traverseToNode(index-1);
      value = leader?.getNext().getValue();
      leader?.setNext(leader.getNext().getNext());    // Manipulate pointers to mark deleted Node for garbage collection
    }
    --this.length;                                    // Decrement length

    return value;
  }

  public getValueAtIndex(index: number): T | null {
    if (index > this.length-1 || index < 0) return null;                  // Validate input
    if (this.length === 0 || !this.head || !this.tail) return null;     // Verify that list is not empty
    if (index === this.length-1) return this.tail.getValue();           // Optimization when retrieving last element

    let targetNode = this._traverseToNode(index);
    return targetNode?.getValue() || null;
  }

  /**
   * Find the index of the desired element if it exists.
   * WARNING: Usable only for trees of primitive types, i.e. number, string
   * @param value Value to search for, i.e. desired element
   * @returns Numerical index of element position
   */
  public searchFor(value: T): number | null {
    if (this.length === 0 || !this.head) return null;

    let currentNode = this.head;

    for (let i=0; !!currentNode; ++i) {
      if (currentNode.getValue()===value) return i;   // Value matches, so return index
      currentNode = currentNode.getNext();            // Otherwise, continue searching
    }
    return null;
  }

  private _traverseToNode(index: number): Node<T> | null {
    if (!this.head) return null;

    let currentNode = this.head;

    for (let i=0; i<index; ++i) {
      currentNode = currentNode.getNext();
    }

    return currentNode;
  }

  public reverse(): boolean {
    if (this.length < 2 || !this.head || !this.tail) return false;

    this.tail = this.head;                // Current head will become the new tail

    let first = this.head;
    let second = first.getNext();
    let tempNode;                         // Will be the third sequential node in deletion sequence

    // Travel up the tree while the second node is present, i.e. not null
    while(second) {
      tempNode = second.getNext();

      second.setNext(first);

      first = second;
      second = tempNode;
    }

    this.tail.setNext(null);
    this.head = first;

    return true;
  }

  public toArray(): Array<T> | any {
    if (this.length <= 0) return null;

    const array = new Array<T>(this.length);

    let currentNode = this.head;

    for (let i=0; !!currentNode; ++i) {
      array[i] = currentNode.getValue();
      currentNode = currentNode.getNext();
    }
    return array;
  }

  public toString(nodesPerGroup?: number): string {
    if (this.length === 0 || !this.head) {
      return "";
    }
    
    nodesPerGroup = nodesPerGroup ? nodesPerGroup : 6;

    const LABEL_HEAD = 'HEAD';
    const LABEL_TAIL = 'TAIL';

    let listAsString: string = `--- Node Count: ${this.length}\n`;
    let currentNode: Node<any> = this.head;

    for (let i=0; i < this.length; ++i) {
      listAsString += `${Array(i%nodesPerGroup).fill('\t').join('')} ${i===0 ? LABEL_HEAD : i} ${currentNode} ${i===this.length-1 ? LABEL_TAIL : ''}\n`;
  
      if (currentNode.hasNext()) {
        currentNode = currentNode.getNext();
      }
    }

    return listAsString;
  }
}

function printLinkedList(linkedList: LinkedList<any>): void {
  if (linkedList.isEmpty()) {
    console.log('Empty linked list -_-');
    return;
  }
  console.log(linkedList.toString());
}

function printSearchFor(value: any, linkedList: LinkedList<any>): void {
  console.log(JSON.stringify(value), 'found at index:', linkedList.searchFor(value));
}

function printGetValueAtIndex(index: number, linkedList: LinkedList<any>) {
  console.log('Element at index', index +':', linkedList.getValueAtIndex(index));
}

function printRemoveIndex(index: number, linkedList: LinkedList<any>) {
  console.log('Removing element at index', index + ':', JSON.stringify(linkedList.removeElementAtIndex(index)));
}



//---------------------------------------------------------------------
// ----------                 MAIN PROGRAM                   ----------
//---------------------------------------------------------------------
if (import.meta.main) {

  const ATLA = new LinkedList<string>();

  ATLA.append('Sokka');
  ATLA.append('Katara');
  ATLA.prepend('Appa');

  printLinkedList(ATLA);

  ATLA.insert('Aang', 2);
  ATLA.insert('Zuko', 1);
  ATLA.insert('Iroh', 4);

  printLinkedList(ATLA);

  printSearchFor('Iroh', ATLA);
  printSearchFor('Sok', ATLA);
  printSearchFor('Sokka', ATLA);
  printSearchFor('Appa', ATLA);
  printSearchFor('Zuko', ATLA);
  printGetValueAtIndex(2, ATLA);
  printGetValueAtIndex(5, ATLA);

  console.log('------------ Reversing List ------------');
  ATLA.reverse();
  printLinkedList(ATLA);

  console.log('----------------------------------');

  printRemoveIndex(1, ATLA);
  printLinkedList(ATLA);
  printRemoveIndex(0, ATLA);
  printLinkedList(ATLA);
  printRemoveIndex(2, ATLA);
  printLinkedList(ATLA);
  printRemoveIndex(2, ATLA);
  printLinkedList(ATLA);
  printRemoveIndex(1, ATLA);
  printRemoveIndex(0, ATLA);
  printLinkedList(ATLA);
  console.log('----------------------------------');

  ATLA.insert('Katara', 0);
  printLinkedList(ATLA);
  ATLA.append('Aang');
  printLinkedList(ATLA);

  console.log('------------ Reversing List ------------');
  ATLA.reverse();
  printLinkedList(ATLA);

  // RUN: deno run Data-Structures/Linked-Lists/LinkedList.ts
}


// --------------------------- Terminal Output: ---------------------------
// --- Node Count: 3
//  HEAD { value: "Appa", next: true }
//          1 { value: "Sokka", next: true }
//                  2 { value: "Katara", next: false } TAIL
//
// --- Node Count: 6
//  HEAD { value: "Appa", next: true }
//          1 { value: "Zuko", next: true }
//                  2 { value: "Sokka", next: true }
//                          3 { value: "Aang", next: true }
//                                  4 { value: "Iroh", next: true }
//                                          5 { value: "Katara", next: false } TAIL
//
// "Iroh" found at index: 4
// "Sok" found at index: null
// "Sokka" found at index: 2
// "Appa" found at index: 0
// "Zuko" found at index: 1
// Element at index 2: Sokka
// Element at index 5: Katara
// ------------ Reversing List ------------
// --- Node Count: 6
//  HEAD { value: "Katara", next: true }
//          1 { value: "Iroh", next: true }
//                  2 { value: "Aang", next: true }
//                          3 { value: "Sokka", next: true }
//                                  4 { value: "Zuko", next: true }
//                                          5 { value: "Appa", next: false } TAIL
//
// ----------------------------------
// Removing element at index 1: "Iroh"
// --- Node Count: 5
//  HEAD { value: "Katara", next: true }
//          1 { value: "Aang", next: true }
//                  2 { value: "Sokka", next: true }
//                          3 { value: "Zuko", next: true }
//                                  4 { value: "Appa", next: false } TAIL
//
// Removing element at index 0: "Katara"
// --- Node Count: 4
//  HEAD { value: "Aang", next: true }
//          1 { value: "Sokka", next: true }
//                  2 { value: "Zuko", next: true }
//                          3 { value: "Appa", next: false } TAIL
//
// Removing element at index 2: "Zuko"
// --- Node Count: 3
//  HEAD { value: "Aang", next: true }
//          1 { value: "Sokka", next: true }
//                  2 { value: "Appa", next: false } TAIL
//
// Removing element at index 2: "Appa"
// --- Node Count: 2
//  HEAD { value: "Aang", next: true }
//          1 { value: "Sokka", next: false } TAIL
//
// Removing element at index 1: "Sokka"
// Removing element at index 0: "Aang"
// Empty linked list -_-
// ----------------------------------
// --- Node Count: 1
//  HEAD { value: "Katara", next: false } TAIL
//
// --- Node Count: 2
//  HEAD { value: "Katara", next: true }
//          1 { value: "Aang", next: false } TAIL
//
// ------------ Reversing List ------------
// --- Node Count: 2
//  HEAD { value: "Aang", next: true }
//          1 { value: "Katara", next: false } TAIL