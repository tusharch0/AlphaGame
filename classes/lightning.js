class Lightning {
    constructor() {
        this.x = random(width / 4, 3 * width / 4);
        this.length = [random(100, 200), random(150, 250), random(height / 3, height / 2)];
        this.theta = [random(PI / 8, 7 * PI / 8), random(PI / 4, 3 * PI / 4)];
    }

    draw() {
        fill(255, 0.5 * 255);
        rect(0, 0, width, height);
        push();
        stroke(255);
        strokeWeight(8);
        // line(this.x, 0, this.x + this.length[0] * sin(this.theta[0]), this.y + this.length[0] * cos(this.theta[0]));
        let firstX = this.x + this.length[0] * cos(this.theta[0]);
        let firstY = this.length[0] * sin(this.theta[0])
        let secondX = firstX + this.length[1] * -cos(this.theta[1]);
        let secondY = firstY + this.length[1] * sin(this.theta[1])
        let lastX = secondX + this.length[2] * cos(this.theta[0]);
        let lastY = secondY + this.length[2] * sin(this.theta[0])
        line(this.x, 0, firstX, firstY);
        line(firstX, firstY, secondX, secondY)
        line(secondX, secondY, lastX, lastY)
        pop();
    }
}