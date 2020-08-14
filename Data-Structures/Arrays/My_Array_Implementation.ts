// RUN:   deno run Data-Structures/Arrays/My_Array_Implementation.ts

type NumIndexedObject = { [index: number]: any };

class MyArray<T> {

  public length: number;
  private data: NumIndexedObject;

  constructor() {
    this.length = 0;
    this.data = Object.create({});
  }

  public get(index: number): T | null {
    if(index > 0 && index < this.length) {
      return this.data[index];
    }

    return null;
  }

  public push(item: T): number {
    this.data[this.length] = item;  // Add item to end of array
    ++this.length;                  // Add 1 to array length

    return this.length;
  }

  public pop(): T | null {
    if(this.length > 0) {
      const lastItem = this.data[this.length-1];  // Retrieve last item
      delete this.data[this.length-1];            // Delete last item
      --this.length;                              // Decrement array length by 1

      return lastItem;
    }

    return null;
  }

  public deleteIndex(index: number): T | null {
    if(index > 0 && index < this.length) {

      const requestedItem = this.data[index];
      this.shiftItemsLeftAfterIndex(index);

      return requestedItem;
    }

    return null;
  }

  public insertItemAtIndex(index: number, item: T): number | null {
    if(index > 0 && index < this.length) {
      this.shiftItemsRightAtIndex(index);
      this.data[index] = item;
      return this.length;
    }

    return null;
  }

  private shiftItemsLeftAfterIndex(index: number): void {
    for (let i=index; i < this.length-1; ++i) {
      this.data[i] = this.data[i+1];
    }

    --this.length;
    delete this.data[this.length];
  }

  private shiftItemsRightAtIndex(index: number): void {
    ++this.length;

    for (let i=this.length-1; i > index; --i) {
      this.data[i] = this.data[i-1];
    }

    delete this.data[index];
  }
}


let helloArray = new MyArray<string>();

helloArray.push('Hello');   // O(1)
helloArray.push('world');
console.log(helloArray);

helloArray.pop();           // O(1)
console.log(helloArray);

helloArray.push('Deno');
helloArray.push('!');
console.log(helloArray);

console.log('At index 2:', helloArray.get(2));

// -------------------------------------------

let sokka = new MyArray<string>();

sokka.push('s');
sokka.push('o');
sokka.push('c');
sokka.push('k');
sokka.push('a');
console.log(sokka);

console.log('Element deleted:', sokka.deleteIndex(2));  // O(n)
console.log(sokka);

sokka.insertItemAtIndex(2, 'k');  // O(n)
console.log(sokka);



// --------------------------- Terminal Output: ---------------------------
// MyArray { length: 2, data: { 0: "Hello", 1: "world" } }
// MyArray { length: 1, data: { 0: "Hello" } }
// MyArray { length: 3, data: { 0: "Hello", 1: "Deno", 2: "!" } }
// At index 2: !
// MyArray { length: 5, data: { 0: "s", 1: "o", 2: "c", 3: "k", 4: "a" } }
// Element deleted: c
// MyArray { length: 4, data: { 0: "s", 1: "o", 2: "k", 3: "a" } }
// MyArray { length: 5, data: { 0: "s", 1: "o", 2: "k", 3: "k", 4: "a" } }