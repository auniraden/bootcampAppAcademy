function getNeighbors(row, col, graph) {
  const neighbors = [];

  // Check top
  if (row > 0) {
    neighbors.push([row - 1, col]);
  }

  // Check bottom
  if (row < graph.length - 1) {
    neighbors.push([row + 1, col]);
  }

  // Check left
  if (col > 0) {
    neighbors.push([row, col - 1]);
  }

  // Check right
  if (col < graph[0].length - 1) {
    neighbors.push([row, col + 1]);
  }

  return neighbors;
}



function islandSize(row, col, graph) {
  const visited = new Set();
  const stack = [[row, col]];
  const startNodeStr = `${row}-${col}`;
  visited.add(startNodeStr);
  let size = 0;

  while (stack.length > 0) {
    const [currentRow, currentCol] = stack.pop();
    size++;

    const neighbors = getNeighbors(currentRow, currentCol, graph);
    for (const [neighborRow, neighborCol] of neighbors) {
      const neighborNodeStr = `${neighborRow}-${neighborCol}`;
      if (!visited.has(neighborNodeStr) && graph[neighborRow][neighborCol] === 1) {
        stack.push([neighborRow, neighborCol]);
        visited.add(neighborNodeStr);
      }
    }
  }

  return size;
}


module.exports = [getNeighbors, islandSize];
