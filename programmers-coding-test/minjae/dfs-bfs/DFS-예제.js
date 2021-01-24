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

//DFS는 큐1개 스택1개 필요 or 재귀
function dfs(graph, startNode) {
    let visitedQueue, needVisitStack; 
    visitedQueue = needVisitStack = [];

    needVisitStack.push(startNode);

    while (needVisitStack.length !== 0) {
        const node = needVisitStack.pop(); //후입 선출

        if (!visitedQueue.includes(node)) {
            visitedQueue.push(node);
            needVisitStack = [...needVisitStack, ...graph[node].reverse()];
        }
    }
    return visitedQueue;
}
console.log(dfs(graph, 1));