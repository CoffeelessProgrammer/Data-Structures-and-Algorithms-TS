export default class BinaryTreeNode {
  private value: number;
  private left: BinaryTreeNode | null;
  private right: BinaryTreeNode | null;

  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  public setValue(value: number) {
    this.value = value;
  }

  public setLeft(binaryTreeNode: BinaryTreeNode) {
    this.left = binaryTreeNode;
  }

  public setRight(binaryTreeNode: BinaryTreeNode) {
    this.right = binaryTreeNode;
  }

  public getValue(): number {
    return this.value;
  }

  public getLeft(): BinaryTreeNode | any {
    return this.left;
  }

  public getRight(): BinaryTreeNode | any {
    return this.right;
  }

  public hasLeft(): boolean {
    if (!!this.left) return true;
    return false;
  }

  public hasRight(): boolean {
    if (!!this.right) return true;
    return false;
  }
}