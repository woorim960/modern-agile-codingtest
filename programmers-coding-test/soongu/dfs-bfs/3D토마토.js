const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});


let graph = [];
const queue = [];
const [dx, dy, dz] = [
  [-1, +1, 0, 0, 0, 0],
  [0, 0, -1, +1, 0, 0],
  [0, 0, 0, 0, -1, +1],
];

let input = [];
let unripeTomato = 0;
let ripeTomato = 0;
let ripeDaysOfAllTomatoes = 0;

function bfs(H, N, M) {
    let queueCursor = 0;
	
    while (queue.length > queueCursor) {
        const [x, y, z] = queue[queueCursor++];
		for (let i = 0; i < 6; i++) {
			const [nx, ny, nz] = [x + dx[i], y + dy[i], z + dz[i]];
			if (nx <= -1 || nx >= H || ny <= -1 || ny >= N || nz <= -1 || nz >= M) continue;
			if (graph[nx][ny][nz] === -1) continue;
			
			if (graph[nx][ny][nz] === 0) {
				graph[nx][ny][nz] = graph[x][y][z] + 1;
				ripeDaysOfAllTomatoes = graph[nx][ny][nz] - 1;
				unripeTomato--;
				queue.push([nx, ny, nz]);
			}
		}
	}
}

rl
	.on("line", (line) => input.push(line))
	.on("close", () => {
		const [M, N, H] = input[0].split(' ').map(Number);
		input = input.slice(1);
		for (let i = 0; i < H; i++) {
			graph.push(new Array());
			for (let j = 0; j < N; j++) {
				graph[i].push(input[0].split(' ').map(Number));
				input = input.slice(1);
			}
		}
	
		for (let i = 0; i < H; i++) {
			for (let j = 0; j < N; j++) {
				for (let k = 0; k < M; k++) {
					if (graph[i][j][k] === 1) {
						queue.push([i, j, k]);
						continue;
					}
					if (graph[i][j][k] === 0) unripeTomato++;
				}
			}
		}

		bfs(H, N, M);
		ripeDaysOfAllTomatoes = unripeTomato === 0 ? ripeDaysOfAllTomatoes : -1;
		console.log(ripeDaysOfAllTomatoes);
	});
