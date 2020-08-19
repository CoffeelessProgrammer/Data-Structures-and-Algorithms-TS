export default class DoublyLLNode<T> {
  private value: T;
  private next: DoublyLLNode<T> | null;
  private previous: DoublyLLNode<T> | null;

  constructor(value: T) {
    this.value = value;
    this.next = null;
    this.previous = null;
  }

  public setValue(value: T) {
    this.value = value;
  }

  public setNext(node: DoublyLLNode<T> | null) {
    this.next = node;
  }

  public setPrevious(node: DoublyLLNode<T> | null) {
    this.previous = node;
  }

  public getValue(): T {
    return this.value;
  }

  public getNext(): DoublyLLNode<T> | any {
    return this.next;
  }

  public getPrevious(): DoublyLLNode<T> | any {
    return this.previous;
  }

  public hasNext(): boolean {
    return !!this.next;
  }

  public hasPrevious(): boolean {
    return !!this.previous;
  }

  public toString(): string {
    return `{ value: ${JSON.stringify(this.value)}, next: ${!!this.next}, previous: ${!!this.previous} }`;
  }
}