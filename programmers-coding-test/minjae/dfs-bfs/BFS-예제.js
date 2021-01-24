const graph = {
    1: [2, 3, 8],
    2: [1, 7],
    3: [1, 4, 5],
    4: [3, 5],
    5: [3, 4],
    6: [7],
    7: [2, 6, 8],
    8: [1, 7],
};

//BFS는 큐 2개 사용
function bfs(graph, startNode) {
    let visitedQueue, needVisitQueue; 
    visitedQueue = needVisitQueue = [];

    needVisitQueue.push(startNode);

    while (needVisitQueue.length !== 0) {
        const node = needVisitQueue.shift(); //선입 선출
        
        if (!visitedQueue.includes(node)) {
            visitedQueue.push(node);
            needVisitQueue = [...needVisitQueue, ...graph[node]];
        }
    }
    return visitedQueue;
}

console.log(bfs(graph, 1));