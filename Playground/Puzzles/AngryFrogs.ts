export default function maxDistance(lilypadHeights: number[]) {
    Solution.initializeLilypadForest(lilypadHeights);
    return Solution.findMaxDistance();
}

class Solution {

    private static lilypadForest: number[];

    static initializeLilypadForest(lilypadHeights: number[]) {
        Solution.lilypadForest = lilypadHeights;
    }

    static findMaxDistance(): number {

        let maxDistance = 0;

        let distanceTraveledLeft, distanceTraveledRight, distanceTraveled;

        for(let i=0; i < Solution.lilypadForest.length; ++i) {
            // console.log("Lilypad", i);
            distanceTraveledRight = Solution._travelRightFrom(i);
            distanceTraveledLeft = Solution._travelLeftFrom(i);

            distanceTraveled = distanceTraveledLeft + distanceTraveledRight;

            // console.log("    Distance Traveled:", distanceTraveled)

            if(distanceTraveled > maxDistance)
                maxDistance = distanceTraveled;

            // console.log("  Max Distance:", maxDistance)
        }

        return maxDistance;
    }

    private static _travelRightFrom(index: number): number {
        for(let i=index; ; ++i) {
            if(i+1 == Solution.lilypadForest.length ||
                Solution.lilypadForest[i+1] < Solution.lilypadForest[i]) {
                    // console.log("  Traveled Right: ", i-index);
                    return i-index;
                }
        }
    }

    private static _travelLeftFrom(index: number): number {
        for(let i=index; ; --i) {
            if(i-1 < 0 || Solution.lilypadForest[i-1] < Solution.lilypadForest[i]) {
                // console.log("  Traveled Left: ", index-i);
                return index-i;
            }
        }
    }
}

//---------------------------------------------------------------------
// ----------                 MAIN PROGRAM                   ----------
//---------------------------------------------------------------------
if (import.meta.main) {

    let forest1 = [5,7,3,1,2,3,4,6,2];
    console.log("Forest 1: ", maxDistance(forest1));

    // RUN:   deno run Playground/Puzzles/AngryFrogs.ts
}