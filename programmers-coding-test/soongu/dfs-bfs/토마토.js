const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

function bfs(N, M, queue) {
	let queueCursor = 0;
	while (queue.length > queueCursor) {
		const [x, y] = queue[queueCursor++];
		for (let i = 0; i < 4; i++) {
			const nx = x + dx[i];
			const ny = y + dy[i];
			
			if (nx <= -1 || ny <= -1 || nx >= N || ny >= M) continue;
			if (graph[nx][ny] === 1 || graph[nx][ny] === -1) continue;
			
			if (graph[nx][ny] !== -1 && !visited[nx][ny]) {
				graph[nx][ny] = graph[x][y] + 1;
				visited[nx][ny] = true;
				queue.push([nx, ny]);
			}
		}
	}
	return count;
}

const [dx, dy] = [
					[-1, 0, 1, 0],
					[0, -1, 0, 1]
				];
let input = [];
let graph = [];
let countGraph = [];
let count = 0;
let queue = [];

rl
	.on("line", (line) => input.push(line))
	.on("close", () => {
		let [M, N] = input[0].split(' ').map((val) => parseInt(val));
		input = input.slice(1);
		visited = Array.from(Array(N), () => Array(M).fill(false));
		for (let i = 0; i < N; i++) {
			graph.push(input[0].split(' ').map((val) => parseInt(val)));
			input = input.slice(1);
		}
		
		for (let i = 0; i < N; i++) {
			for (let j = 0; j < M; j++) {
				if (graph[i][j] === 1) {
					queue.push([i, j]);
				}
			}
		}
	
		bfs(N, M, queue);

		for (let i = 0; i < N; i++) {
			for (let j = 0; j < M; j++) {
				if (graph[i][j] === 0) {
					console.log(-1);
					return 0;
				}
				if (count < graph[i][j]) {
					count = graph[i][j];
				}
			}
		}
		console.log(count - 1);
	});
