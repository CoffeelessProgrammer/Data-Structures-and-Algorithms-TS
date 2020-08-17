export default class BinaryTreeNode {
  private value: number;
  private left: BinaryTreeNode | null;
  private right: BinaryTreeNode | null;

  constructor(value: number) {
    this.left = null;
    this.right = null;
    this.value = value;
  }

  public setValue(value: number) {
    this.value = value;
  }

  public setRight(binaryTreeNode: BinaryTreeNode) {
    this.right = binaryTreeNode;
  }

  public setLeft(binaryTreeNode: BinaryTreeNode) {
    this.left = binaryTreeNode;
  }

  public getValue(): number {
    return this.value;
  }

  public getRight(): BinaryTreeNode | any {
    return this.right;
  }

  public getLeft(): BinaryTreeNode | any {
    return this.left;
  }
}