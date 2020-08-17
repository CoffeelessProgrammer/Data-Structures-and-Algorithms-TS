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

  public lookup(value: number): BNode | null {
    let currentNode: BNode;

    if(!!this.root) {
      currentNode = this.root;
    } else {
      return null;
    }

    while(true) {
      // We found our value!
      if (value === currentNode.getValue()) {
        return currentNode;
      }

      
      if (value < currentNode.getValue()) {       // Value is smaller than current node
        if(!!currentNode.getLeft()) {               // If left child exists
          currentNode = currentNode.getLeft();        // Move into left child
          continue;
        }
        return null;                                // Otherwise No left child, value DNE
      }
      else {                                      // Value is greater than current node
        if(!!currentNode.getRight()) {              // If right child exists
          currentNode = currentNode.getRight();       // Move into right child
          continue;
        }
        return null;                                // Otherwise no right child, value DNE
      }
    }
  }

  public remove(value: number): boolean {
    let parentNode: BNode | null;
    let currentNode: BNode;

    if(!!this.root) {
      currentNode = this.root;
      parentNode = null;
    } else {
      return false;
    }

    while(true) {

      if (value < currentNode.getValue()) {
        parentNode = currentNode;
        currentNode = currentNode.getLeft()
        continue;
      }
      else if(value > currentNode.getValue()) {
        parentNode = currentNode;
        currentNode = currentNode.getRight();
        continue;
      }
      else if(value === currentNode.getValue()){    // Found node to delete!
        // Decision Tree for Deleting a Node
        // Branch 1: No right child
        if (!currentNode.getRight()) {
          if (!parentNode) {
            this.root = currentNode.getLeft();
          }
          else {

            if (currentNode.getValue() < parentNode.getValue()) {
              parentNode.setLeft(currentNode.getLeft());
            }
            else if (currentNode.getValue() > parentNode.getValue()) {
              parentNode.setRight(currentNode.getLeft());
            }

          }
        }
        // Branch 2: Right child w/ no left child
        else if (!currentNode.getRight().getLeft()) {
          if (!parentNode) {
            this.root = currentNode.getLeft();
          } else {
            currentNode.getRight().setLeft(currentNode.getLeft());

            if (currentNode.getValue() < parentNode.getValue()) {
              parentNode.setLeft(currentNode.getRight());
            }
            else if (currentNode.getValue() > parentNode.getValue()) {
              parentNode.setRight(currentNode.getRight());
            }
          }
        }
        // Branch 3: Right child w/ left child
        else {

          // Find the right child's left most child
          let leftmost = currentNode.getRight().getLeft();
          let parentOfLeftmost = currentNode.getRight();
          while(!!leftmost.getLeft()) {
            parentOfLeftmost = leftmost;
            leftmost = leftmost.getLeft();
          }

          // Parent's left subtree is now leftmost's right subtree
          parentOfLeftmost.setLeft(leftmost.getRight());
          leftmost.setLeft(currentNode.getLeft());
          leftmost.setRight(currentNode.getRight());

          if (!parentNode) {
            this.root = leftmost;
          }
          else {

            if (currentNode.getValue() < parentNode.getValue()) {
              parentNode.setLeft(leftmost);
            }
            else if (currentNode.getValue() > parentNode.getValue()) {
              parentNode.setRight(leftmost);
            }

          }
        }
      }

      return true;    // Node removal was a success!
    }
  }

  public equalsQuantum(tree: BinarySearchTree): boolean {
    return JSON.stringify(this) === JSON.stringify(tree);
  }
}

function printNode(tree: BinarySearchTree, value: number): void {
  const requestedNode = tree.lookup(value);
  console.log('Find', value + ':', !!requestedNode ? JSON.stringify(requestedNode) : 'Node not found.');
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
  //  1   6   15  170

  tree.insert(9);
  tree.insert(4);
  tree.insert(6);
  tree.insert(20);
  tree.insert(170);
  tree.insert(15);
  tree.insert(1);
  console.log('Tree: ', JSON.stringify(traverseFrom(tree.getRoot())));
  tree.remove(20);
  printNode(tree, 4);
  printNode(tree, 17);
  printNode(tree, 40);
  printNode(tree, 170);

  // RUN: deno run Data-Structures/Trees/BinarySearchTree.ts
}