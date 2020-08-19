export default class LinkedListNode<T> {
  private value: T;
  private next: LinkedListNode<T> | null;

  constructor(value: T) {
    this.value = value;
    this.next = null;
  }

  public setValue(value: T) {
    this.value = value;
  }

  public setNext(nextNode: LinkedListNode<T> | null) {
    this.next = nextNode;
  }

  public getValue(): T {
    return this.value;
  }

  public getNext(): LinkedListNode<T> | any {
    return this.next;
  }

  public hasNext(): boolean {
    return !!this.next;
  }

  public toString(): string {
    return `{ value: ${JSON.stringify(this.value)}, next: ${!!this.next} }`;
  }
}