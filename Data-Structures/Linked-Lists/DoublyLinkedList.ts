import Node from './DoublyNode.ts';

export default class DoublyLinkedList<T> {
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

  public isEmpty(): boolean {
    return this.length === 0;
  }

  public append(value: T, demo?: boolean): boolean {
    const newNode = new Node(value);

    if (!this.tail) {
      this.head = newNode;
      this.tail = newNode;
    }
    else {
      newNode.setPrevious(this.tail);
      this.tail.setNext(newNode);
      this.tail = this.tail.getNext();
    }
    ++this.length;

    if (demo) {
      console.log('--------- Appending', value, 'at index', this.length-1);
      console.log(this.toString());
    }

    return true;
  }

  public prepend(value: T, demo?: boolean): boolean {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.setNext(this.head);
      this.head.setPrevious(newNode);
      this.head = newNode;
    }
    ++this.length;

    if (demo) {
      console.log('--------- Prepending', value, '---------');
      console.log(this.toString());
    }

    return true;
  }

  public insert(value: T, atIndex: number, demo?: boolean): boolean | null {
    if (atIndex < 0 || atIndex > this.length) return null;
    if (atIndex === 0) {
      this.prepend(value, demo);
      return true;
    }
    if (atIndex === this.length) {
      this.append(value, demo);
      return true;
    }

    const newNode = new Node(value);

    const leader = this._traverseToNode(atIndex-1);
    if (!leader) return false;

    const follower = leader.getNext();
    
    newNode.setPrevious(leader);
    newNode.setNext(follower);
    leader.setNext(newNode);
    follower.setPrevious(newNode);

    ++this.length;

    if (demo) {
      console.log('--------- Inserting', value, 'at index', atIndex);
      console.log(this.toString());
    }

    return true;
  }

  public getValueAtIndex(index: number): T | null {
    if (index > this.length-1 || index < 0) return null;                // Validate input
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

  /**
   * Remove all nodes from list. Constant Time O(1)
   */
  public empty(nestedCall?: boolean): boolean {
    this.head = null;
    this.tail = null;
    this.length = nestedCall ? 1 : 0;
    return true;
  }

  public removeElementAtIndex(index: number, demo?: boolean): T | null {
    if (index > this.length-1 || index < 0) return null;
    if (this.length === 0 || !this.head) return null;

    let value = null;

    if (index===0) {
      value = this.head.getValue();

      if (this.length > 1) {
        const newHead = this.head.getNext();
        newHead.setPrevious(null);
        this.head.setNext(null);
        this.head = newHead;
      } else {
        this.empty(true);
      }
    }
    else {
      let leader = this._traverseToNode(index-1);

      const deletedNode = leader?.getNext();
      value = deletedNode.getValue();

      leader?.setNext(leader.getNext().getNext());
      leader?.getNext().setPrevious(leader);
      deletedNode.setNext(null);
      deletedNode.setPrevious(null);
    }
    --this.length;

    if (demo) {
      console.log('Removing element at index', index + ':', JSON.stringify(value));
    }

    return value;
  }

  private _traverseToNode(index: number): Node<T> | null {
    if (!this.head || !this.tail) return null;

    let currentNode: Node<T>;

    if (index < this.length/2) {
      currentNode = this.head;
  
      for (let i=0; i<index; ++i) {
        currentNode = currentNode.getNext();
      }
    } else {
      currentNode = this.tail;
  
      for (let i=this.length-1; i>index; --i) {
        currentNode = currentNode.getPrevious();
      }
    }

    return currentNode;
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

function printLinkedList(linkedList: DoublyLinkedList<any>): void {
  if (linkedList.isEmpty()) {
    console.log('Empty linked list -_-');
    return;
  }
  console.log(linkedList.toString());
}

function printSearchFor(value: any, linkedList: DoublyLinkedList<any>): void {
  console.log(JSON.stringify(value), 'found at index:', linkedList.searchFor(value));
}

function printGetValueAtIndex(index: number, linkedList: DoublyLinkedList<any>) {
  console.log('Element at index', index +':', linkedList.getValueAtIndex(index));
}


//---------------------------------------------------------------------
// ----------                 MAIN PROGRAM                   ----------
//---------------------------------------------------------------------
if (import.meta.main) {

  const ATLA = new DoublyLinkedList<string>();

  ATLA.append('Sokka');
  ATLA.append('Katara');
  ATLA.prepend('Appa');

  printLinkedList(ATLA);

  ATLA.insert('Aang', 2, true);
  ATLA.insert('Zuko', 1);
  ATLA.insert('Iroh', 5, true);
  ATLA.insert('Azula', 0, true);

  printSearchFor('Iroh', ATLA);
  printSearchFor('Sok', ATLA);
  printSearchFor('Sokka', ATLA);
  printSearchFor('Appa', ATLA);
  printSearchFor('Zuko', ATLA);
  printGetValueAtIndex(1, ATLA);
  printGetValueAtIndex(6, ATLA);
  console.log('----------------------------------');

  ATLA.removeElementAtIndex(1, true);
  printLinkedList(ATLA);
  ATLA.removeElementAtIndex(0, true);
  printLinkedList(ATLA);
  ATLA.removeElementAtIndex(2, true);
  printLinkedList(ATLA);
  ATLA.removeElementAtIndex(2, true);
  printLinkedList(ATLA);
  ATLA.removeElementAtIndex(1, true);
  ATLA.removeElementAtIndex(0, true);
  ATLA.removeElementAtIndex(1, true);
  ATLA.removeElementAtIndex(0, true);
  printLinkedList(ATLA);
  
  console.log('----------------------------------');
  console.log();

  ATLA.insert('Katara', 0, true);
  ATLA.append('Aang');
  printLinkedList(ATLA);

  // RUN: deno run Data-Structures/Linked-Lists/DoublyLinkedList.ts
}


// --------------------------- Terminal Output: ---------------------------
// --- Node Count: 3
//  HEAD { value: "Appa", next: true, previous: false }
//          1 { value: "Sokka", next: true, previous: true }
//                  2 { value: "Katara", next: false, previous: true } TAIL
//
// --------- Inserting Aang at index 2
// --- Node Count: 4
//  HEAD { value: "Appa", next: true, previous: false }
//          1 { value: "Sokka", next: true, previous: true }
//                  2 { value: "Aang", next: true, previous: true }
//                          3 { value: "Katara", next: false, previous: true } TAIL
//
// --------- Appending Iroh at index 5
// --- Node Count: 6
//  HEAD { value: "Appa", next: true, previous: false }
//          1 { value: "Zuko", next: true, previous: true }
//                  2 { value: "Sokka", next: true, previous: true }
//                          3 { value: "Aang", next: true, previous: true }
//                                  4 { value: "Katara", next: true, previous: true }
//                                          5 { value: "Iroh", next: false, previous: true } TAIL
//
// --------- Prepending Azula ---------
// --- Node Count: 7
//  HEAD { value: "Azula", next: true, previous: false }
//          1 { value: "Appa", next: true, previous: true }
//                  2 { value: "Zuko", next: true, previous: true }
//                          3 { value: "Sokka", next: true, previous: true }
//                                  4 { value: "Aang", next: true, previous: true }
//                                          5 { value: "Katara", next: true, previous: true }
//  6 { value: "Iroh", next: false, previous: true } TAIL
//
// "Iroh" found at index: 6
// "Sok" found at index: null
// "Sokka" found at index: 3
// "Appa" found at index: 1
// "Zuko" found at index: 2
// Element at index 1: Appa
// Element at index 6: Iroh
// ----------------------------------
// Removing element at index 1: "Appa"
// --- Node Count: 6
//  HEAD { value: "Azula", next: true, previous: false }
//          1 { value: "Zuko", next: true, previous: true }
//                  2 { value: "Sokka", next: true, previous: true }
//                          3 { value: "Aang", next: true, previous: true }
//                                  4 { value: "Katara", next: true, previous: true }
//                                          5 { value: "Iroh", next: false, previous: true } TAIL
//
// Removing element at index 0: "Azula"
// --- Node Count: 5
//  HEAD { value: "Zuko", next: true, previous: false }
//          1 { value: "Sokka", next: true, previous: true }
//                  2 { value: "Aang", next: true, previous: true }
//                          3 { value: "Katara", next: true, previous: true }
//                                  4 { value: "Iroh", next: false, previous: true } TAIL
//
// Removing element at index 2: "Aang"
// --- Node Count: 4
//  HEAD { value: "Zuko", next: true, previous: false }
//          1 { value: "Sokka", next: true, previous: true }
//                  2 { value: "Katara", next: true, previous: true }
//                          3 { value: "Iroh", next: false, previous: true } TAIL
//
// Removing element at index 2: "Katara"
// --- Node Count: 3
//  HEAD { value: "Zuko", next: true, previous: false }
//          1 { value: "Sokka", next: true, previous: true }
//                  2 { value: "Iroh", next: false, previous: true } TAIL
//
// Removing element at index 1: "Sokka"
// Removing element at index 0: "Zuko"
// Removing element at index 0: "Iroh"
// Empty linked list -_-
// ----------------------------------
//
// --------- Prepending Katara ---------
// --- Node Count: 1
//  HEAD { value: "Katara", next: false, previous: false } TAIL
//
// --- Node Count: 2
//  HEAD { value: "Katara", next: true, previous: false }
//          1 { value: "Aang", next: false, previous: true } TAIL