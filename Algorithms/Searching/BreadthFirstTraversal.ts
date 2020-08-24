import BST from '../../Data-Structures/Trees/BinarySearchTree.ts';
import Node from '../../Data-Structures/Trees/BinaryTreeNode.ts';
import Queue from '../../Data-Structures/Sequential/Queue.ts';

function recursiveBFT(nodeQueue: Queue<Node>, nodesTraversed: Array<number>): Array<number> {
  if (nodeQueue.getLength() === 0) return nodesTraversed;

  let currentNode: Node = nodeQueue.dequeue();
  nodesTraversed.push(currentNode.getValue());
  if (currentNode.hasLeft()) nodeQueue.enqueue(currentNode.getLeft());
  if (currentNode.hasRight()) nodeQueue.enqueue(currentNode.getRight());

  return recursiveBFT(nodeQueue, nodesTraversed);
}

function breadthFirstTraversal(tree: BST) {
  const root = tree.getRoot();

  if (!root) return false;

  const nodesTraversed: number[] = [];
  const nodeQueue = new Queue<Node>();

  nodeQueue.enqueue(root);

  return recursiveBFT(nodeQueue, nodesTraversed);
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

  console.log(breadthFirstTraversal(tree));

  // RUN:   deno run Algorithms/Searching/BreadthFirstTraversal.ts
}

// --------------------------- Terminal Output: ---------------------------
// [
//   9, 4, 20, 1,
//   6, 15, 170
// ]