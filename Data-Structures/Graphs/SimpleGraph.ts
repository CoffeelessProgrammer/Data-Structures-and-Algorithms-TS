type StrIndexedObject = { [index: string]: Set<string> };


export default class SimpleGraph {
  private numberOfNodes: number;
  private adjacentList: StrIndexedObject;

  constructor() {
    this.numberOfNodes = 0;
    this.adjacentList = Object.create({});
  }

  public getNodeCount(): number {
    return this.numberOfNodes;
  }

  public addVertex(node: string) {
    this.adjacentList[node] = new Set<string>();
    ++this.numberOfNodes;
  }

  public addEdge(node1: string, node2: string) {
    // Undirected, unweighted graph
    this.adjacentList[node1].add(node2);
    this.adjacentList[node2].add(node1);
  }

  public toString(): string {
    const allNodes = Object.keys(this.adjacentList);

    let representation: string = "";

    for (let node of allNodes) {
      let nodeConnections = this.adjacentList[node];
      let vertex;
      let count = 0;
      let connections = " { ";
      for (vertex of nodeConnections) {
        connections += vertex + (count < nodeConnections.size-1 ? ", ": " ");
        ++count;
      }
      representation += (node + "-->" + connections + '}\n');
    }
    return representation;
  }
}

function printGraph(graph: SimpleGraph) {
  console.log(graph.toString());
}

//---------------------------------------------------------------------
// ----------                 MAIN PROGRAM                   ----------
//---------------------------------------------------------------------
if (import.meta.main) {

  let simpleGraph = new SimpleGraph();

  simpleGraph.addVertex("0");
  simpleGraph.addVertex("1");
  simpleGraph.addVertex("2");
  simpleGraph.addVertex("3");
  simpleGraph.addVertex("4");
  simpleGraph.addVertex("5");
  simpleGraph.addVertex("6");
  simpleGraph.addEdge("3", "1");
  simpleGraph.addEdge("3", "4");
  simpleGraph.addEdge("4", "2");
  simpleGraph.addEdge("4", "5");
  simpleGraph.addEdge("1", "2");
  simpleGraph.addEdge("1", "0");
  simpleGraph.addEdge("0", "2");
  simpleGraph.addEdge("6", "5");

  printGraph(simpleGraph);

  // RUN:   deno run Data-Structures/Graphs/Graph.ts
}

// --------------------------- Terminal Output: ---------------------------
// 0--> { 1, 2 }
// 1--> { 3, 2, 0 }
// 2--> { 4, 1, 0 }
// 3--> { 1, 4 }
// 4--> { 3, 2, 5 }
// 5--> { 4, 6 }
// 6--> { 5 }