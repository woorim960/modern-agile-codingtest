const readline = require('readline');
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

function bfs(start) {
	let queue = [];
	queue.push(start);
	visited[start] = true;
	while(queue.length > 0) {
		let deqeue = queue.shift();
		visited[deqeue] = true;
		for (let i = 1; i < graph.length; i++) {
			if (graph[i][deqeue] === 1 && visited[i] === false) {
				visited[i] === true;
				if (!queue.includes(i)) {
					queue.push(i);
					result++;	
				}
			}
		}
	}
}

let input = [];
let graph = [];
let visited = [];
let bfsGraph = [];
let result = 0;

rl.on("line", (line) => input.push(line))
	.on("close", () => {
		const N = parseInt(input[0]);
		const M = parseInt(input[1]);
		input.splice(0, 2);
		visited = Array.from(Array(N + 1).fill(false));
		graph = Array.from(Array(N + 1), () => Array(N + 1).fill(0));
		for (let i of input) {
			let [x, y] = i.split(' ').map((val) => parseInt(val));
			graph[x][y] = 1;
			graph[y][x] = 1;
		}
		bfs(1);
		console.log(result);
	});
