const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

function bfs(x, y, N, M) {
	let queue = [[x, y]];
	while (queue.length !== 0) {
		[x, y] = queue.shift();
		for (let i = 0; i < 4; i++) {
			const nx = x + dx[i];
			const ny = y + dy[i];
			
			if (nx <= -1 || ny <= -1 || nx >= M || ny >= N) {
				continue;
			}
			
			if (graph[nx][ny] === 0) {
				continue;
			}
			
			if(graph[nx][ny] === 1) {
				graph[nx][ny] = graph[x][y] + 1;
				queue.push([nx, ny]);
			}
		}
	}
	
}

const [dx, dy] = [
					[-1, 0, 1, 0],
					[0, -1, 0, 1]
				];
let input = [];
let graph = [];
let count = 0;
let countArray = [];

rl
	.on("line", (line) => input.push(line))
	.on("close", () => {
		const T = parseInt(input[0]);
		input = input.slice(1);
		for (let i = 0; i < T; i++) {
			let [M, N, K] = input[0].split(' ').map((val) => parseInt(val));
			graph = Array.from(Array(M), () => Array(N).fill(0));
			visited = Array.from(Array(M), () => Array(N).fill(0));
			input = input.slice(1);
			for (let i = 0; i < K; i++) {
				let [x, y] = input[0].split(' ').map((val) => parseInt(val));
				graph[x][y] = 1;
				input = input.slice(1);
			}
			
			for (let i = 0; i < M; i++) {
				for (let j = 0; j < N; j++) {
					if (graph[i][j] === 1) {
						bfs(i, j, N, M);
						count++;
					}
				}
			}
			countArray.push(count);
			count = 0;
		}
		console.log(countArray.join('\n'));
	});
