import { assertEquals } from '../../test_deps.ts';

import maxDistance from './AngryFrogs.ts';


// RUN: deno test Playground/Puzzles/AngryFrogs.test.ts

//---------------------------------------------------------------------
// ----------                  UNIT TESTS                    ----------
//---------------------------------------------------------------------

Deno.test({
    name: "[1,2,3,4,5] -> 4",
    fn() {
        let lilypadHeights = [1,2,3,4,5];
        assertEquals(maxDistance(lilypadHeights), 4);
    }
});



Deno.test({
    name: "[5,7,3,1,2,3,4,6,2] -> 6",
    fn() {
        let lilypadHeights = [5,7,3,1,2,3,4,6,2];
        assertEquals(maxDistance(lilypadHeights), 6);
    }
});