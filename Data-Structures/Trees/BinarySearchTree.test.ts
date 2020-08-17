import { assertEquals, assertNotEquals } from '../../test_deps.ts';

import BinarySearchTree from './BinarySearchTree.ts';


//---------------------------------------------------------------------
// ----------                  UNIT TESTS                    ----------
//---------------------------------------------------------------------

//    RUN: deno test Data-Structures/Trees/BinarySearchTree.test.ts

Deno.test({
  name: "Compare Trees 1",
  fn() {

    const tree1 = new BinarySearchTree();
    tree1.insert(30);
    tree1.insert(6);
    tree1.insert(92)
    const tree2 = new BinarySearchTree();
    tree2.insert(30);
    tree2.insert(92);
    tree2.insert(6);

    assertEquals(tree1.equalsQuantum(tree2), true);
  }
})

Deno.test({
  name: "Compare Trees 2",
  fn() {
    
    const tree1 = new BinarySearchTree();
    tree1.insert(30);
    tree1.insert(6);
    tree1.insert(92)
    const tree2 = new BinarySearchTree();
    tree2.insert(30);
    tree2.insert(6);
    tree2.insert(91);

    assertEquals(tree1.equalsQuantum(tree2), false);
  }
})