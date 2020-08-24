import BST from '../../Data-Structures/Trees/BinarySearchTree.ts';
import Node from '../../Data-Structures/Trees/BinaryTreeNode.ts';


export function inorderDFT(tree: BST) {
  const root = tree.getRoot();
  if (!root) return false;

  const nodesTraversed: number[] = [];

  return traverseInOrder(root, nodesTraversed);
  
  /**
   * Recursive DFS on Binary Search Tree via inorder traversal
   * @param node Binary node to traverse
   * @param nodesTraversed Array of all nodes reached inorder
   */
  function traverseInOrder(node: Node, nodesTraversed: Array<number>) {
    if (node.hasLeft()) traverseInOrder(node.getLeft(), nodesTraversed);
    nodesTraversed.push(node.getValue());
    if (node.hasRight()) traverseInOrder(node.getRight(), nodesTraversed);
    return nodesTraversed;
  }
}

export function preorderDFT(tree: BST) {
  const root = tree.getRoot();
  if (!root) return false;

  const nodesTraversed: number[] = [];

  return traversePreOrder(root, nodesTraversed);
  
  /**
   * Recursive DFS on Binary Search Tree via preorder traversal
   * @param node Binary node to traverse
   * @param nodesTraversed Array of all nodes reached preorder
   */
  function traversePreOrder(node: Node, nodesTraversed: Array<number>) {
    nodesTraversed.push(node.getValue());
    if (node.hasLeft()) traversePreOrder(node.getLeft(), nodesTraversed);
    if (node.hasRight()) traversePreOrder(node.getRight(), nodesTraversed);
    return nodesTraversed;
  }
}

export function postorderDFT(tree: BST) {
  const root = tree.getRoot();
  if (!root) return false;

  const nodesTraversed: number[] = [];

  return traversePostOrder(root, nodesTraversed);

  /**
   * Recursive DFS on Binary Search Tree via postorder traversal
   * @param node Binary node to traverse
   * @param nodesTraversed Array of all nodes reached postorder
   */
  function traversePostOrder(node: Node, nodesTraversed: Array<number>) {
    if (node.hasLeft()) traversePostOrder(node.getLeft(), nodesTraversed);
    if (node.hasRight()) traversePostOrder(node.getRight(), nodesTraversed);
    nodesTraversed.push(node.getValue());
    return nodesTraversed;
  }
}


//---------------------------------------------------------------------
// ----------                 MAIN PROGRAM                   ----------
//---------------------------------------------------------------------
if (import.meta.main) {

  const tree = new BST();

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

  console.log('Inorder:', inorderDFT(tree));
  console.log('Preorder:', preorderDFT(tree));
  console.log('Postorder:', postorderDFT(tree));

  // RUN:   deno run Algorithms/Searching/DepthFirstTraversals.ts
}

// --------------------------- Terminal Output: ---------------------------
// Inorder: [
//   1, 4, 6, 9,
//   15, 20, 170
// ]
// Preorder: [
//   9, 4, 1, 6,
//   20, 15, 170
// ]
// Postorder: [
//   1, 6, 4, 15,
//   170, 20, 9
// ]