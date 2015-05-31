load("topo.js");
g = new Graph(6);
g.addEdge(0,1);
g.addEdge(1,2);
g.addEdge(1,3);
g.addEdge(3,4);
g.addEdge(3,5);
g.vertexList = ["CS1", "CS2", "Assembly Language",
 "Data Structures", "Operating Systems",
 "Algorithms"];
g.showGraph();
print();
g.topSort();
