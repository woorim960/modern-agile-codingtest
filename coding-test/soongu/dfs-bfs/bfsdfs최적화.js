const fs = require("fs");
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const [N, M, V] = input[0].split(" ").map(Number);

const graph = Array.from(new Array(N + 1), () => new Array());
let visited;

for (let i = 1; i < M; i++) {
	const [node1, node2] = input[i].split(" ").map(Number);
	graph[node1].push(node2);
	graph[node2].push(node1);
}

graph.map((v) => v.sort((a, b) => a - b));
console.log(graph);

const visitingNodeByDfs = [];
function dfs(v) {
	visited[v] = true;
	visitingNodeByDfs.push(v);
	for (let child of graph[v]) {
		console.log(`child : ${child}`);
		if (!visited[child]) {
			console.log(child);
			dfs(child);
		}
	}
}

const visitingNodeByBfs = [];
function bfs(v) {
	const queue = [v];
	visited[v] = true;

	while (queue.length !== 0) {
		const dequeue = queue.shift();
		visitingNodeByBfs.push(dequeue);

		for (let child of graph[dequeue]) {
			if (!visited[child]) {
				queue.push(child);
				visited[child]= true;
			}
		}
	}
}

visited = new Array(N + 1).fill(false);
dfs(V);

visited = new Array(N + 1).fill(false);
bfs(V);

visitingNodeByDfs.forEach(v => process.stdout.write(`${v} `));
console.log();
visitingNodeByBfs.forEach(v => process.stdout.write(`${v} `));

