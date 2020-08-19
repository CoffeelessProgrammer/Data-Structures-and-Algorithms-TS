type NumIndexedObject = { [index: number]: any };

export default class MyArray<T> {

  public length: number;
  private data: NumIndexedObject;

  constructor() {
    this.length = 0;
    this.data = Object.create({});
  }

  /**
   * Get element at given index.
   * @param index Index of value to return
   * @returns Value, or null if non-existant
   */
  public get(index: number): T | null {
    if(index > 0 && index < this.length) {
      return this.data[index];
    }

    return null;
  }

  /**
   * Add element to end of array,i.e. at index Array.length.
   * @param item Value/object to push
   * @returns Length of array after push
   */
  public push(item: T): number {
    this.data[this.length] = item;  // Add item to end of array
    ++this.length;                  // Add 1 to array length

    return this.length;
  }

  /**
   * Remove the last element of array.
   * @returns Value/object at last index, or null if empty array
   */
  public pop(): T | null {
    if(this.length > 0) {
      const lastItem = this.data[this.length-1];  // Retrieve last item
      delete this.data[this.length-1];            // Delete last item
      --this.length;                              // Decrement array length by 1

      return lastItem;
    }

    return null;
  }

  /**
   * Delete item at given index.
   * @param index Numerical position to delete
   * @returns Value/object at index, or null if empty array
   */
  public deleteIndex(index: number): T | null {
    if(index >= 0 && index < this.length) {

      const requestedItem = this.data[index];
      this._shiftItemsLeftAfterIndex(index);

      return requestedItem;
    }

    return null;
  }

  /**
   * Insert a given value (item) at specified index
   * @param index Numerical position to insert at
   * @param item Value/object to insert
   * @returns Length of array after insertion, or null if failed insertion
   */
  public insertItemAtIndex(index: number, item: T): number | null {
    if(index >= 0 && index < this.length) {
      this._shiftItemsRightAtIndex(index);
      this.data[index] = item;
      return this.length;
    }

    return null;
  }

  private _shiftItemsLeftAfterIndex(index: number): void {
    for (let i=index; i < this.length-1; ++i) {
      this.data[i] = this.data[i+1];
    }

    --this.length;
    delete this.data[this.length];
  }

  private _shiftItemsRightAtIndex(index: number): void {
    ++this.length;

    for (let i=this.length-1; i > index; --i) {
      this.data[i] = this.data[i-1];
    }

    delete this.data[index];
  }
}



//---------------------------------------------------------------------
// ----------                 MAIN PROGRAM                   ----------
//---------------------------------------------------------------------
if (import.meta.main) {

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

  // RUN:   deno run Data-Structures/Arrays/Implementation.ts
}

// --------------------------- Terminal Output: ---------------------------
// MyArray { length: 2, data: { 0: "Hello", 1: "world" } }
// MyArray { length: 1, data: { 0: "Hello" } }
// MyArray { length: 3, data: { 0: "Hello", 1: "Deno", 2: "!" } }
// At index 2: !
// MyArray { length: 5, data: { 0: "s", 1: "o", 2: "c", 3: "k", 4: "a" } }
// Element deleted: c
// MyArray { length: 4, data: { 0: "s", 1: "o", 2: "k", 3: "a" } }
// MyArray { length: 5, data: { 0: "s", 1: "o", 2: "k", 3: "k", 4: "a" } }