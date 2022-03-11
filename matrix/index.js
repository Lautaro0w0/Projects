const element = document.querySelector("#canvas");

const w = document.body.clientWidth;
const h = document.body.clientHeight;

element.width = w;
element.height = h;

const position = Array(300).join(0).split("");

const ctx = element.getContext("2d");


const initMatrix = () =>{
    ctx.fillStyle = "rgba(333, 152, 20, 0.56)";
    ctx.fillRect(0, 0, w, h);

    ctx.fillStyle = "rgba(100, 300, 20, 0.89)";
    ctx.font = "12pt";

    position.map((y, index) => {
        const text = String.fromCharCode(1e5 + Math.random() * 30);
        const x = index * 15;

        canvas.getContext("2d").fillText(text, x, y);

        y > 100 + Math.random() * 1e5
          ? (position[index] = 0) 
          : (position[index] = y + 15);
    });
};

setInterval(initMatrix, 50);
