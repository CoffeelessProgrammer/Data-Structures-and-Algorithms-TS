import { assertEquals } from "../../../test_deps.ts";

import {
  firstRecurringNumber,
  findFirstRecurring,
} from "./Recurring_Symbol.ts";

const array1 = [2, 5, 1, 2, 3, 5, 1, 2, 4];
const array2 = [2, 1, 1, 2, 3, 5, 1, 2, 4];
const array3 = [2, 3, 4, 5];
const array4 = [2, 5, 5, 2, 3, 5, 1, 2, 4];
const array5 = ["a", "z", "n", "z", "x", "g"];

//---------------------------------------------------------------------
// ----------                  UNIT TESTS                    ----------
//---------------------------------------------------------------------

//    RUN: deno test Playground/Challenges/Hash-Tables/Recurring_Symbol.test.ts

Deno.test({
  name: "Recurring Character",
  fn() {
    // ["a", "z", "n", "z", "x", "g"];
    assertEquals(findFirstRecurring(array5), "z");
  }
});

Deno.test({
  name: "Recurring Number 1",
  fn() {
    // [2, 5, 1, 2, 3, 5, 1, 2, 4]
    assertEquals(firstRecurringNumber(array1), 2);
  }
});

Deno.test({
  name: "Recurring Number 2",
  fn() {
    // [2, 1, 1, 2, 3, 5, 1, 2, 4]
    assertEquals(firstRecurringNumber(array2), 1);
  }
});

Deno.test({
  name: "Recurring Number 3",
  fn() {
    // [2, 3, 4, 5]
    assertEquals(firstRecurringNumber(array3), undefined);
  }
});

Deno.test({
  name: "Recurring Number 4",
  fn() {
    // [2, 5, 5, 2, 3, 5, 1, 2, 4]
    assertEquals(firstRecurringNumber(array4), 5);
  }
});