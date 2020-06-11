let squares = [];
let SCORE = 0;
let REQUEST_ANIMATION_ID;

function Square(x, color, speed) {
    this.x = x;
    this.y = 0;
    this.color = color;
    this.speed = speed;
}

Square.prototype.width = 25;
Square.prototype.height = 25;
Square.prototype.move = function (canvas) {
    this.y += this.speed;
}

function redrawScore() {
    document.getElementById('score').innerHTML = SCORE;
}

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function start(e) {
    e.disabled = true;
    SCORE = 0;
    squares = [];
    animate();
}

function stop() {
    var canvas = document.getElementById('canvas');
    canvas.getContext('2d')
        .clearRect(0, 0, canvas.clientWidth, canvas.clientWidth);
    document.querySelector('#startButton').disabled = false;

    cancelAnimationFrame(REQUEST_ANIMATION_ID);
}


function animate() {
    redrawScore();
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.clientWidth, canvas.clientWidth);

    if (random(0, 50) == 1 || squares.length == 0) {
        squares.push(new Square(
            random(0, canvas.clientWidth - 20), 
            '#' + random(0, 16777215).toString(16),
            random(1, 3),
        ));
    }

    squares.forEach((square) => {
        ctx.fillStyle = square.color;
        ctx.fillRect(square.x, square.y, square.width, square.height);
        square.move(canvas);
    });

    REQUEST_ANIMATION_ID = requestAnimationFrame(animate);
}

document.body.onload = () => {
    document.getElementById('canvas').addEventListener('mousedown', function (mouse) {
        let canvas = document.getElementById('canvas');

        let mouseX = mouse.clientX - canvas.offsetLeft;
        let mouseY = mouse.clientY - canvas.offsetTop;

        for (let i = 0; i < squares.length; i++) {
            if (mouseX >= squares[i].x && mouseX <= squares[i].x + squares[i].width
             && mouseY >= squares[i].y && mouseY <= squares[i].y + squares[i].height
            ) {
                squares.splice(i, 1);
                SCORE++;
            }
        }
    });
};