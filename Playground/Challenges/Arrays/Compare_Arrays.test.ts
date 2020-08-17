import { assertEquals, assertNotEquals } from "../../../test_deps.ts";

import { containsCommonItem } from "./Compare_Arrays.ts";

const array1 = ['a', 'b', 'c', 'x'];
const array2 = ['z', 'y', 'x'];
const array3 = ['z', 't', 'i'];

//---------------------------------------------------------------------
// ----------                  UNIT TESTS                    ----------
//---------------------------------------------------------------------

//    RUN: deno test Playground/Challenges/Arrays/Compare_Arrays.test.ts

Deno.test({
    name: "Matching Elements 1",
    fn() {
        assertEquals(containsCommonItem(array1, array2) , true);
    }
});

Deno.test({
    name: "Matching Elements 2",
    fn() {
        assertEquals(containsCommonItem(array2, array3) , true);
    }
});

Deno.test({
    name: "No Matching 1",
    fn() {
        assertNotEquals(containsCommonItem(array1, array3) , true);
    }
});