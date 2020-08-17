import BNode from './BinaryTreeNode.ts';


export default class BinarySearchTree {
  private root: BNode | null;

  constructor() {
    this.root = null;
  }

  public getRoot(): BNode | null {
    return this.root;
  }

  public insert(value: number) {
    // TODO: Insert value into BST

    // If empty tree, create root
    if(this.root === null) {
      this.root = new BNode(value);
      return this.root;
    }

    // Otherwise, traverse tree to find correct insert location
    let currentNode: BNode = this.root;

    while(true) {
      // Value is smaller than current node
      if (value < currentNode.getValue()) {
        if(!currentNode.getLeft()) {                // If no left node on currentNode
          currentNode.setLeft(new BNode(value));    // Create left node with value
          return this;
        } else {
          currentNode = currentNode.getLeft();      // Otherwise, go into existing left node
          continue;                                 // Small optimization
        }
      }

      // Value is greater than or equal to current node
      if (value >= currentNode.getValue()) {
        if(!currentNode.getRight()) {               // If no right node on currentNode
          currentNode.setRight(new BNode(value));   // Create right node with value  
          return this;
        } else {
          currentNode = currentNode.getRight();     // Otherwise, go into the existing right node
          continue;                                 // Small optimization
        }
      }
    }
  }

  public lookup(value: number) {
    // TODO: Find value in BST
    console.log("Lookup not implemented");
  }

  public remove(value: number) {
    // TODO: Remove from node from BST
    console.log("Remove not implemented");
  }
}

function traverseFrom(node: BNode | null) {
  if(node === null) return;

  const tree = Object.create({});
  tree.value = node.getValue();
  tree.left = node.getLeft() === null ? null : traverseFrom(node.getLeft());
  tree.right = node.getRight() === null ? null : traverseFrom(node.getRight());
  return tree;
}

//---------------------------------------------------------------------
// ----------                 MAIN PROGRAM                   ----------
//---------------------------------------------------------------------
if (import.meta.main) {

  const tree = new BinarySearchTree();

  //        9
  //    4       20
  //  1   6   15   170

  tree.insert(9);
  tree.insert(4);
  tree.insert(6);
  tree.insert(20);
  tree.insert(170);
  tree.insert(15);
  tree.insert(1);
  console.log(JSON.stringify(traverseFrom(tree.getRoot())));

  // RUN: deno run Data-Structures/Trees/BinarySearchTree.ts
}