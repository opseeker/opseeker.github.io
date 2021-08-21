const c = document.querySelector("Canvas");
const ctx = c.getContext("2d");

const sqrSize = 50
const speed = 2;
const cwidth = sqrSize * 12;
const cheight = sqrSize * 12;
c.width = cwidth;
c.height = cheight;

ctx.fillStyle = "#0a0a0a";
ctx.fillRect(0, 0, cwidth, cheight);

const lines = [];

const newLineTimer = setInterval(() => {
    if (lines.length < 125) {
        newLine();
    }
}, 50);

function newLine() {
    const offset = Math.round(Math.random() * 5) / 5 - 0.5;

    const line = {};
    line.x = sqrSize * ((Math.random() < 0.5 ? 4 : 8) + offset);
    line.y = sqrSize * ((Math.random() < 0.5 ? 4 : 8) + offset);
    line.step = (Math.random() < 0.5 ? 0 : -1);
    line.dir = Math.floor(Math.random() * 4);
    line.hue = Math.floor(Math.random() * 80) + 200;
    lines.push(line);
}

render();
function render() {

    ctx.fillStyle = "rgba(0,0,0,0.05)";
	ctx.fillRect(0, 0, cwidth, cheight);

    lines.forEach((line, ix) => {

        ctx.fillStyle = `hsl(${line.hue}, 90%, 60%)`;
        ctx.fillRect(line.x, line.y ,speed, speed);

        if (line.step === sqrSize) {
            line.step = 0;
            line.dir = (line.dir + (Math.random() < 0.5 ? 1 : 3)) % 4;
        }

        switch (line.dir) {
            case 0:
                line.y -= speed;
                break;

            case 1:
                line.x += speed;
                break;

            case 2:
                line.y += speed;
                break;

            case 3:
                line.x -= speed;
                break;
        }

        if ((line.x < 0) || (line.x > sqrSize * 12) || (line.y < 0) || (line.y > sqrSize * 12)) {
            lines.splice(ix, 1);
        }

        line.step += speed;
    });

    requestAnimationFrame(render);
}