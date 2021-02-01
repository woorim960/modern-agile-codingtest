const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

let input = [];
let graph = [];
let visited = [];
const [dx, dy] = [
					[-2, -2, +2, +2, +1, +1, -1, -1],
					[-1, +1, +1, -1, -2, +2, +2, -2]
				];
let counts = [];
let queue = [];

function bfs(startX, startY, graph, visited, I, endX, endY) {
	let queue = [[startX, startY]];
	while(queue.length !== 0) {
		[x, y] = queue.shift();
		if (x === endX && y === endY) return 0;
		for (let i = 0; i < 8; i++) {
			const nx = x + dx[i];
			const ny = y + dy[i];
			
			if (nx <= -1 || ny <= -1 || nx >= I || ny >= I) continue;
			if (graph[nx][ny] === 1) continue;
			
			if (graph[nx][ny] === 0 || !visited[nx][ny]) {
				graph[nx][ny] = graph[x][y] + 1;
				visited[nx][ny] = true;
				queue.push([nx, ny]);
			}
			
			if (nx === endX && ny === endY) {
				return 0;
			}
		}	  
	}
}

rl
	.on("line", (line) => input.push(line))
	.on("close", () => {
		const T = parseInt(input[0]);
		input = input.slice(1);
		for (let i = 0; i < T; i++) {
			const I = parseInt(input[0]);
			input = input.slice(1);
			graph = Array.from(Array(I), () => Array(I).fill(0));
			visited = Array.from(Array(I), () => Array(I).fill(false));
			const [startX, startY] = input[0].split(' ').map((val) => parseInt(val));
			input = input.slice(1);
			const [endX, endY] = input[0].split(' ').map((val) => parseInt(val));
			input = input.slice(1);
			bfs(startX, startY, graph, visited, I, endX, endY);
			counts.push(graph[endX][endY]);
		}
		console.log(counts.join('\n'));
	});
