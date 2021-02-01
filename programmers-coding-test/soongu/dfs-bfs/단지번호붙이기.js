const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

function dfs(x, y, N) {
	if (x <= -1 || x >= N || y <= -1 || y >= N) {
		return false;
	}
	
	if (graph[x][y] === 1) {
		graph[x][y] = 0;
		dfs(x - 1, y, N);
		dfs(x + 1, y, N);
		dfs(x, y + 1, N);
		dfs(x, y - 1, N);
		sum += 1;
		return true;
	}
	return false;
}

let input = [];
let graph = [];
let countGraph = [];
let sum = 0;


rl
	.on("line", (line) => input.push(line))
	.on("close", () => {
		const N = parseInt(input[0]);
		input = input.slice(1);
		for (let i = 0; i < N; i++) {
			graph.push(input[i].split('').map((val) => parseInt(val)));
		}
		
		let result = 0;
		for (let i = 0; i < N; i++) {
			for (let j = 0; j < N; j++) {
				if (dfs(i, j, N) === true) {
					result++;
					countGraph.push(sum);
					sum = 0;
				}
			}
		}
        countGraph.sort((a, b) => a - b);
        countGraph.unshift(result);
		console.log(countGraph.join('\n'));
	});
