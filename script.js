let started = false;
let keys = [];

// Effects
let raindrops = [], bgrain = [], clouds = [], fishes = [], theta;

if (!localStorage.getItem("hscore")) localStorage.setItem("hscore", 0);

// Game
let holes = [], leaking = 0;
let rise = 0, score = 0, hscore = parseInt(localStorage.getItem("hscore")), rate = 500;

let lightning;

function setup() {
    theta = PI / 2;
    createCanvas(windowWidth, windowHeight).class("game");
    noStroke();
    textFont("Noto Sans JP")
    holes.push(new Hole());
    lightning = new Lightning();
}

function draw() {
    if (started) {

        background("#001c46");

        rate--;

        theta = PI / 2 + PI / 4 * sin(frameCount / 2000);

        raindrops.push(new Rain(theta));
        bgrain.push(new Rain(theta), new Rain(theta), new Rain(theta));

        if (frameCount % 100 == 0) clouds.push(new Cloud())
        if (frameCount % rate == 0) holes.push(new Hole());

        if (rate < 0) rate = 500;

        for (let i = bgrain.length - 1; i > 0; i--) {
            let rain = bgrain[i];
            rain.draw();
            if (rain.y > 250 + rain.length) {
                bgrain.splice(i, 1)
            }
        }

        // Dam
        fill(200);
        rect(0, 200, width, height - 200);

        // Fill line
        push();
        strokeWeight(1);
        stroke(102);
        line(0, height - 400, width, height - 400);
        pop();

        for (let i = holes.length - 1; i >= 0; i--) {
            let hole = holes[i];
            hole.draw();
            if (hole.y > height + hole.length) {
                holes.splice(i, 1)
            }
        }

        for (let i = raindrops.length - 1; i >= 0; i--) {
            let rain = raindrops[i];
            rain.draw();
            if (rain.y > height + rain.length) {
                raindrops.splice(i, 1)
            }
        }

        for (let i = clouds.length - 1; i >= 0; i--) {
            let cloud = clouds[i];
            cloud.draw();
            if (cloud.x > width + this.radius * 3) {
                clouds.splice(i, 1);
            }
            if (cloud.x < -this.radius * 3) {
                clouds.splice(i, 1);
            }
        }

        // Fish
        for (let i = fishes.length - 1; i >= 0; i--) {
            let fish = fishes[i];
            fish.draw();
            if (fish.x > width + 50 || fish.x < -50) {
                fishes.splice(i, 1)
            }
        }

        // Water
        push();
        strokeWeight(4);
        stroke(0, 45, 112);
        fill(0, 67, 168, 0.9 * 255);
        rect(-2, height - rise + 12, width + 4, 500);
        pop();

        rise += leaking / 2;

        if (rise >= 50) {
            if (frameCount % 10 == 0) {
                fishes.push(new Fish(rise))
            }
        }

        if (rise >= 415) {
            started = false;
            if (score > hscore) {
                hscore = score;
                localStorage.setItem("hscore", hscore);
                document.querySelector(".new-high-score").style.display = 'block';
            }
            document.querySelector(".score").innerHTML = score;
            document.querySelector(".lose").style.display = 'block';
            document.querySelector(".game").style.display = 'none';
            document.body.style.overflow = "auto";
        }

        // Lightning
        if (frameCount % 100 >= 0 && frameCount % 100 <= 20) {
            lightning.draw();
        } else lightning = new Lightning()

        fill(255);
        textAlign(CENTER);
        textSize(50);
        text(score, width / 2, 50);

    }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function keyPressed() {
    keys[keyCode] = true;
}

function keyReleased() {
    keys[keyCode] = false;
}

function mouseClicked() {
    for (let i = holes.length - 1; i >= 0; i--) {
        let hole = holes[i];
        if (hole.click(mouseX, mouseY)) {
            holes.splice(i, 1);
            score++;
        }
    }
}