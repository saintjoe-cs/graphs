load("Graph.js");
function topSort() {
  var stack = [];
  var visited = [];
  for (var i = 0; i < this.vertices; i++) {
    visited[i] = false;
    }
  for (var i = 0; i < this.vertices; i++) {
    if (!visited[i]) {
// print('Sending off node ' + i + ' for processing');
      this.topSortHelper(i, visited, stack);
      }
    }
  for (var i = 0; i < stack.length; i++) {
    if (stack[i] !== undefined && stack[i] !== false) {
      print(this.vertexList[stack[i]]);
      }
    }
}

function topSortHelper(v, visited, stack) {
// print('Processing ' + v);
  visited[v] = true;
print('this.adv[v]: ' + JSON.stringify(this.adj[v]));
//  for (var i = 0; i < this.adj[v]; i++) {
  for (var w in this.adj[v]) { 
    if (!visited[w]) {
// print('Recursing on adjecent vertex ' + w + ' and passing ' + visited[w]);
      this.topSortHelper(visited[w], visited, stack);
      }
    }
//print('Pushing node ' + v);
  stack.push(v);
}
