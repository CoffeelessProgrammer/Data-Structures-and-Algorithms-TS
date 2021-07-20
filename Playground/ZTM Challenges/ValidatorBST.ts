import BST from '../../Data-Structures/Trees/BinarySearchTree.ts';
import Node from '../../Data-Structures/Trees/BinaryTreeNode.ts';

export default class BinarySearchTreeValidator {
  private static previousVal: number | undefined = undefined;

  private static _resetValidator() {
    this.previousVal = undefined;
  }

  public static validate(tree: BST, visualize?: boolean): boolean {
    const root = tree.getRoot();
    if (!root) return false;

    visualize = visualize || false;

    const valid: boolean = this._traverseInOrder(root, visualize);

    this._resetValidator();

    return valid;
  }

  private static _traverseInOrder(node: Node, visualize: boolean): boolean {
    if (node.hasLeft()) this._traverseInOrder(node.getLeft(), visualize);

    const currentValue = node.getValue();
    if (visualize) console.log('\tCurrent Value:', node.getValue(), '\tPrevious:', this.previousVal);

    if (!this.previousVal) this.previousVal = currentValue;
    else if (currentValue < this.previousVal) return false;
    else this.previousVal = currentValue;

    if (node.hasRight()) this._traverseInOrder(node.getRight(), visualize);

    return true;
  }
}

function printBSTValidation(tree: BST, treeLabel: string) {
  console.log(treeLabel, '– Original:', BinarySearchTreeValidator.validate(tree, true));
}



//---------------------------------------------------------------------
// ----------                 MAIN PROGRAM                   ----------
//---------------------------------------------------------------------
if (import.meta.main) {

  const tree1 = new BST();
  tree1.insert(9);
  tree1.insert(4);
  tree1.insert(6);
  tree1.insert(20);
  tree1.insert(170);
  tree1.insert(15);
  tree1.insert(1);

  //        9
  //    4       20
  //  1   6   15  170
  printBSTValidation(tree1, 'Tree 1');


  tree1.invertTree();
  //         9
  //    20         4
  // 170   15    6   1
  printBSTValidation(tree1, 'Tree 1');


  const tree2 = new BST();
  tree2.insert(16);
  tree2.insert(8);
  tree2.insert(32);

  printBSTValidation(tree2, 'Tree 2');
  tree2.invertTree();
  printBSTValidation(tree2, 'Tree 2');
  

  const tree3 = new BST();
  tree3.insert(48);
  tree3.insert(29);
  tree3.insert(77);
  tree3.insert(18);
  tree3.insert(16);
  tree3.insert(68);
  tree3.insert(72);
  tree3.insert(83);

  printBSTValidation(tree3, 'Tree 3');
  tree3.invertTree();
  printBSTValidation(tree3, 'Tree 3');

  // RUN:   deno run Playground/Challenges/ValidatorBST.ts
}

// --------------------------- Terminal Output: ---------------------------
//    Current Value: 1        Previous: undefined
//    Current Value: 4        Previous: 1
//    Current Value: 6        Previous: 4
//    Current Value: 9        Previous: 6
//    Current Value: 15       Previous: 9
//    Current Value: 20       Previous: 15
//    Current Value: 170      Previous: 20
// Tree 1 – Original: true
//    Current Value: 170      Previous: undefined
//    Current Value: 20       Previous: 170
//    Current Value: 9        Previous: 170
// Tree 1 – Original: false
//    Current Value: 8        Previous: undefined
//    Current Value: 16       Previous: 8
//    Current Value: 32       Previous: 16
// Tree 2 – Original: true
//    Current Value: 32       Previous: undefined
//    Current Value: 16       Previous: 32
// Tree 2 – Original: false
//    Current Value: 16       Previous: undefined
//    Current Value: 18       Previous: 16
//    Current Value: 29       Previous: 18
//    Current Value: 48       Previous: 29
//    Current Value: 68       Previous: 48
//    Current Value: 72       Previous: 68
//    Current Value: 77       Previous: 72
//    Current Value: 83       Previous: 77
// Tree 3 – Original: true
//    Current Value: 83       Previous: undefined
//    Current Value: 77       Previous: 83
//    Current Value: 48       Previous: 83
// Tree 3 – Original: false