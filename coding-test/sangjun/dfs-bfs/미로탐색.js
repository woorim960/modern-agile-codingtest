const readline = require("readline");

let input = [];
let maps = [];

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on("line", (line) => { input.push(line); }).on("close", () => { 
    const [n, m] = input[0].split(" ").map(Number);
    input.splice(0, 1);
    for (let i = 0; i < n; i++) { 
        maps.push(input[i].split("").map((el) => Number(el))); 
    }   

    let dx = [-1, 1, 0, 0];
    let dy = [0, 0, -1, 1];

    const queue = [];

    function bfs(x, y) {
        queue.push([x, y])

        while(queue.length) {
            const node = queue.shift();

            let x = node[0]
            let y = node[1]

            for (let i = 0; i < dx.length; i++) {
                const [nx, ny] = [x + dx[i], y + dy[i]];

                if (nx < 0 || ny < 0 || nx >= n || ny >= m) {
                    continue;
                }
                if (maps[nx][ny] === 0) {
                    continue;
                }
                if (maps[nx][ny] === 1) {
                maps[nx][ny] = maps[x][y] + 1;
                queue.push([nx, ny]);
                }
            }
        }
        return maps[n - 1][m - 1];
    }

    console.log(bfs(0, 0));
});