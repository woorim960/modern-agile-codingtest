const readline = require('readline');
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

function dfs(V) {
	visited[V] = true;
	dfsGraph.push(V);
	for (let i = 1; i < graph.length; i++) {
		if (graph[V][i] === 1 && visited[i] === false) {
			visited[i] === true;
			dfs(i);
		} 
	}
}

function bfs(V) {
	let queue = [];
	queue.push(V);
	bfsGraph.push(V);
	while(queue.length > 0) {
		let dequeu = queue.shift();
		visited[dequeu] = true;
		for (let i = 1; i < graph.length; i++) {
			if(graph[dequeu][i] === 1 && visited[i] === false) {
				visited[i] = true;
				queue.push(i);
				bfsGraph.push(i);
			}
		}
	}
}

let input = [];
let visited = [];
let graph = [];
let dfsGraph = [];
let bfsGraph = [];

rl.on("line", (line) => {
	input.push(line);
}).on("close", () => {
	const [N, M, V] = input[0].split(' ').map((val) => parseInt(val));
	input = input.slice(1);
	graph = Array.from(Array(N + 1), () => Array(N + 1).fill(0));
	visited = Array(N + 1).fill(false);
	for (let i of input) {
		let [x, y] = i.split(' ').map((val) => parseInt(val));
		graph[x][y] = 1;
		graph[y][x] = 1;
	}
	dfs(V);
	visited = Array(N + 1).fill(false);
	bfs(V);
	console.log(dfsGraph.join(' '));
	console.log(bfsGraph.join(' '));
});